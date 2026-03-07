import { KVCacheHandler } from "vinext/cloudflare";
import { setCacheHandler } from "vinext/shims/cache";

export async function register() {
  try {
    const { env } = await import("cloudflare:workers");
    if (env.FRAGMENTS_KV) {
      setCacheHandler(new KVCacheHandler(env.FRAGMENTS_KV));
    } else if (process.env.ENVIRONMENT === "production") {
      console.warn(
        "[fragments] FRAGMENTS_KV is not configured. Falling back to in-memory cache.",
      );
    }
  } catch (e) {
    const isModuleNotFound =
      e instanceof Error &&
      (e.message.includes("cloudflare:workers") ||
        ("code" in e &&
          (e as NodeJS.ErrnoException).code === "ERR_MODULE_NOT_FOUND"));
    if (!isModuleNotFound) {
      throw e;
    }
  }
}
