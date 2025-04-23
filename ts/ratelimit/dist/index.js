"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  NoopRatelimit: () => NoopRatelimit,
  Overrides: () => Overrides,
  Ratelimit: () => Ratelimit
});
module.exports = __toCommonJS(index_exports);

// src/noop.ts
var NoopRatelimit = class {
  limit(_identifier, _opts) {
    return Promise.resolve({
      limit: 0,
      remaining: 0,
      reset: 0,
      success: true
    });
  }
};

// src/ratelimit.ts
var import_api = require("@unkey/api");
var import_errors = require("@unkey/api/models/errors");

// src/duration.ts
function ms(d) {
  if (typeof d === "number") {
    return d;
  }
  const match = d.match(/^(\d+)\s?(ms|s|m|h|d)$/);
  if (!match) {
    throw new Error(`Unable to parse window size: ${d}`);
  }
  const time = Number.parseInt(match[1]);
  const unit = match[2];
  switch (unit) {
    case "ms":
      return time;
    case "s":
      return time * 1e3;
    case "m":
      return time * 1e3 * 60;
    case "h":
      return time * 1e3 * 60 * 60;
    case "d":
      return time * 1e3 * 60 * 60 * 24;
    default:
      throw new Error(`Unable to parse window size: ${d}`);
  }
}

// src/ratelimit.ts
var Ratelimit = class {
  config;
  unkey;
  constructor(config) {
    this.config = config;
    this.unkey = new import_api.Unkey({
      serverURL: config.baseUrl,
      rootKey: config.rootKey
    });
  }
  /**
   * Limit a specific identifier, you can override a lot of things about this specific request using
   * the 2nd argument.
   *
   * @example
   * ```ts
   * const identifier = getIpAddress() // or userId or anything else
   * const res = await unkey.limit(identifier)
   *
   * if (!res.success){
   *   // reject request
   * }
   * // handle request
   * ```
   */
  async limit(identifier, opts) {
    try {
      return this._limit(identifier, opts);
    } catch (e) {
      if (!this.config.onError) {
        throw e;
      }
      const err = e instanceof Error ? e : new Error(String(e));
      return await this.config.onError(err, identifier);
    }
  }
  async _limit(identifier, opts) {
    const timeout = this.config.timeout === false ? null : this.config.timeout ?? {
      ms: 5e3,
      fallback: () => ({ success: false, limit: 0, remaining: 0, reset: Date.now() })
    };
    let timeoutId = null;
    try {
      const ps = [
        this.unkey.ratelimit.limit({
          namespace: this.config.namespace,
          identifier,
          limit: opts?.limit?.limit ?? this.config.limit,
          duration: ms(opts?.limit?.duration ?? this.config.duration),
          cost: opts?.cost
        }).then(async (res) => {
          return res.data;
        }).catch((err) => {
          if (err instanceof import_errors.APIError) {
            throw new Error(
              `Ratelimit failed: [${err.statusCode} - ${err.message}]: ${err.body}`
            );
          }
          throw new Error(`Ratelimit failed: ${err}`);
        })
      ];
      if (timeout) {
        ps.push(
          new Promise((resolve) => {
            timeoutId = setTimeout(async () => {
              const resolvedValue = typeof timeout.fallback === "function" ? await timeout.fallback(identifier) : timeout.fallback;
              resolve(resolvedValue);
            }, ms(timeout.ms));
          })
        );
      }
      return await Promise.race(ps);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
};

// src/overrides.ts
var import_api2 = require("@unkey/api");
var Overrides = class {
  unkey;
  constructor(config) {
    this.unkey = new import_api2.Unkey({
      serverURL: config.baseUrl,
      rootKey: config.rootKey
    });
  }
  get getOverride() {
    return this.unkey.ratelimit.getOverride;
  }
  get setOverride() {
    return this.unkey.ratelimit.setOverride;
  }
  get deleteOverride() {
    return this.unkey.ratelimit.deleteOverride;
  }
  get listOverrides() {
    return this.unkey.ratelimit.listOverrides;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NoopRatelimit,
  Overrides,
  Ratelimit
});
//# sourceMappingURL=index.js.map