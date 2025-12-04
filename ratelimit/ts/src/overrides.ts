import { Unkey } from "@unkey/api";
import type { RequestOptions } from "@unkey/api/lib/sdks";
import type {
  V2RatelimitDeleteOverrideRequestBody,
  V2RatelimitDeleteOverrideResponseBody,
  V2RatelimitGetOverrideRequestBody,
  V2RatelimitGetOverrideResponseBody,
  V2RatelimitListOverridesRequestBody,
  V2RatelimitListOverridesResponseBody,
  V2RatelimitSetOverrideRequestBody,
  V2RatelimitSetOverrideResponseBody,
} from "@unkey/api/models/components";

export type OverrideConfig = {
  /**
   * @default https://api.unkey.com
   */
  baseUrl?: string;

  /**
   * The unkey root key. You can create one at https://app.unkey.com/settings/root-keys
   *
   * Make sure the root key has permissions to use overrides.
   */
  rootKey: string;
};

export class Overrides {
  private readonly unkey: Unkey;

  constructor(config: OverrideConfig) {
    this.unkey = new Unkey({
      serverURL: config.baseUrl,
      rootKey: config.rootKey,
    });
  }

  public getOverride(
    request: V2RatelimitGetOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<V2RatelimitGetOverrideResponseBody> {
    return this.unkey.ratelimit.getOverride(request, options);
  }

  public setOverride(
    request: V2RatelimitSetOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<V2RatelimitSetOverrideResponseBody> {
    return this.unkey.ratelimit.setOverride(request, options);
  }

  public deleteOverride(
    request: V2RatelimitDeleteOverrideRequestBody,
    options?: RequestOptions,
  ): Promise<V2RatelimitDeleteOverrideResponseBody> {
    return this.unkey.ratelimit.deleteOverride(request, options);
  }

  public listOverrides(
    request: V2RatelimitListOverridesRequestBody,
    options?: RequestOptions,
  ): Promise<V2RatelimitListOverridesResponseBody> {
    return this.unkey.ratelimit.listOverrides(request, options);
  }
}
