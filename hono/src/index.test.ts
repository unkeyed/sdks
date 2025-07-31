import { Hono } from "hono";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { z } from "zod";
import { type UnkeyContext, unkey } from "./index";

const key = "test_key";

const server = setupServer(
  http.post("https://api.unkey.com/v2/keys.verifyKey", async ({ request }) => {
    const req = z
      .object({
        key: z.string(),
      })
      .parse(await request.json());

    if (req.key !== key) {
      return HttpResponse.json({
        meta: { requestId: "requestId" },
        data: {
          valid: false,
          code: "NOT_FOUND",
        },
      });
    }

    return HttpResponse.json({
      meta: { requestId: "requestId" },
      data: {
        valid: true,
        code: "VALID",
      },
    });
  }),
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("No custom Config", () => {
  describe("happy path", () => {
    const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

    app.use(
      "*",
      unkey({
        rootKey: "rootKey",
      }),
    );

    app.get("/", (c) => c.json(c.get("unkey")));

    test("Should be hello message", async () => {
      const res = await app.request("http://localhost/", {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      expect(
        res.status,
        `expected 200, received: ${JSON.stringify(res, null, 2)}`,
      ).toBe(200);
      expect(await res.json()).toMatchObject({
        meta: { requestId: "requestId" },
        data: {
          valid: true,
          code: "VALID",
        },
      });
    });
  });

  describe("No Authorization header", () => {
    const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

    app.use(
      "*",
      unkey({
        rootKey: "rootKey",
      }),
    );

    app.get("/", (c) => c.json(c.get("unkey")));

    test("should be unauthorized", async () => {
      const res = await app.request("http://localhost/");
      expect(res.status).toBe(401);
      expect(await res.json()).toMatchObject({
        error: "unauthorized",
      });
    });
  });
});

describe("With custom key getter", () => {
  describe("No Authorization header", () => {
    const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

    app.use(
      "/*",
      unkey({
        rootKey: "rootKey",
        getKey: (c) => {
          return c.text("oh well");
        },
      }),
    );

    app.get("/", (c) => c.json(c.get("unkey")));

    test("should be called with response", async () => {
      const res = await app.request("http://localhost/");
      expect(
        res.status,
        `expected 200, received: ${JSON.stringify(res, null, 2)}`,
      ).toBe(200);
      expect(await res.text()).toEqual("oh well");
    });
  });
});

describe("With custom invalid handler", () => {
  describe("No Authorization header", () => {
    const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

    let calledWith: UnkeyContext | null = null;
    app.use(
      "/*",
      unkey({
        rootKey: "rootKey",

        handleInvalidKey: (c, result) => {
          calledWith = result;
          return c.text("oh well");
        },
      }),
    );

    app.get("/", (c) => c.json(c.get("unkey")));

    test("should be called with response", async () => {
      const res = await app.request("http://localhost/", {
        headers: {
          Authorization: "Bearer notakey",
        },
      });
      expect(
        res.status,
        `expected 200, received: ${JSON.stringify(res, null, 2)}`,
      ).toBe(200);
      expect(await res.text()).toEqual("oh well");
      expect(calledWith).toMatchObject({
        meta: { requestId: "requestId" },
        data: {
          valid: false,
          code: "NOT_FOUND",
        },
      });
    });
  });
});
