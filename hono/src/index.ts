import { Unkey } from "@unkey/api";
import type { Context, MiddlewareHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import * as errors from "@unkey/api/models/errors";

type VerifyResponse = Awaited<
  ReturnType<InstanceType<typeof Unkey>["keys"]["verifyKey"]>
>;
export type UnkeyContext = VerifyResponse;

export type UnkeyConfig = {
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
   * Return the key as string, or undefined if it doesn't exist.
   *
   * You can also override the response given to the caller by returning a `Response`
   *
   * @default `c.req.header("Authorization")?.replace("Bearer ", "")`
   */
  getKey?: (c: Context) => string | undefined | Response;

  /**
   * Automatically return a custom response when a key is invalid
   */
  handleInvalidKey?: (
    c: Context,
    result: UnkeyContext,
  ) => Response | Promise<Response>;

  /**
   * What to do if things go wrong
   */
  onError?: (c: Context, err: errors.APIError) => Response | Promise<Response>;
};

export function unkey(config: UnkeyConfig): MiddlewareHandler {
  const unkey = new Unkey({
    rootKey: config.rootKey,
  });

  return async (c, next) => {
    const key = config.getKey
      ? config.getKey(c)
      : (c.req.header("Authorization")?.replace("Bearer ", "") ?? null);
    if (!key) {
      return c.json({ error: "unauthorized" }, { status: 401 });
    }
    if (typeof key !== "string") {
      return key;
    }

    try {
      const res = await unkey.keys.verifyKey({
        key,
        permissions: config.permissions,
        tags: config.tags,
      });

      if (!res.data.valid && config.handleInvalidKey) {
        return config.handleInvalidKey(c, res);
      }

      c.set("unkey", res);
    } catch (err) {
      console.error("OH NO", err);
      if (err instanceof errors.APIError) {
        if (config.onError) {
          return config.onError(c, err);
        }
        throw new HTTPException(500, {
          message: `unkey error: [CODE: ${err.statusCode}] - ${err.message}`,
        });
      }

      throw err;
    }
    await next();
  };
}
