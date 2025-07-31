import { Unkey } from "@unkey/api";
import * as errors from "@unkey/api/models/errors";
import { type NextRequest, NextResponse } from "next/server";

export type WithUnkeyConfig = {
  /**
   * The root key is required to verify keys.
   */
  rootKey: string;

  /**
   * 	Arbitrary tags you may add during the verification to filter later.
   */
  tags?: string[];

  /**
   * Require keys to have these permissions to be valid.
   */
  permissions?: string;

  /**
   * How to get the key from the request
   * Usually the key is provided in an `Authorization` header, but you can do what you want.
   *
   * Return the key as string, or null if it doesn't exist.
   *
   * You can also override the response given to the caller by returning a `NextResponse`
   *
   * @default `req.headers.get("authorization")?.replace("Bearer ", "") ?? null`
   */
  getKey?: (req: NextRequest) => string | null | Response | NextResponse;

  /**
   * Automatically return a custom response when a key is invalid
   */
  handleInvalidKey?: (
    req: NextRequest,
    result: UnkeyContext,
  ) => Response | NextResponse | Promise<Response> | Promise<NextResponse>;

  /**
   * What to do if things go wrong
   */
  onError?: (
    req: NextRequest,
    err: errors.APIError,
  ) => Response | NextResponse | Promise<Response> | Promise<NextResponse>;
};

type VerifyResponse = Awaited<
  ReturnType<InstanceType<typeof Unkey>["keys"]["verifyKey"]>
>;
export type UnkeyContext = VerifyResponse;

export type NextContext = {
  params: Promise<Record<string, string | string[]>>;
};

export type NextRequestWithUnkeyContext = NextRequest & { unkey: UnkeyContext };

export function withUnkey<TContext extends NextContext = NextContext>(
  handler: (
    req: NextRequestWithUnkeyContext,
    context: TContext,
  ) => Response | NextResponse | Promise<Response | NextResponse>,
  config: WithUnkeyConfig,
) {
  return async (req: NextRequest, context: TContext) => {
    /**
     * Get key from request and return a response early if not found
     */
    const key = config?.getKey
      ? config.getKey(req)
      : (req.headers.get("authorization")?.replace("Bearer ", "") ?? null);
    if (key === null) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    if (typeof key !== "string") {
      return key;
    }

    const unkey = new Unkey({
      rootKey: config.rootKey,
    });

    try {
      const res = await unkey.keys.verifyKey({
        key,
        permissions: config.permissions,
        tags: config.tags,
      });

      if (!res.data.valid && config.handleInvalidKey) {
        return config.handleInvalidKey(req, res);
      }

      if (!res.data.valid) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      // @ts-ignore
      req.unkey = res;

      return handler(req as NextRequestWithUnkeyContext, context);
    } catch (err) {
      if (err instanceof errors.APIError) {
        if (config.onError) {
          return config.onError(req, err);
        }
        console.error(
          `unkey error: [CODE: ${err.statusCode}] - ${err.message}`,
        );
        return new NextResponse("Internal Server Error", { status: 500 });
      }

      throw err;
    }
  };
}
