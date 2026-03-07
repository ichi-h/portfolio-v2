interface KVNamespace {
  get(
    key: string,
    options: { type: "arrayBuffer" },
  ): Promise<ArrayBuffer | null>;
  get(key: string, options?: { type?: string }): Promise<string | null>;
  put(
    key: string,
    value: string | ArrayBuffer | ReadableStream,
    options?: {
      expirationTtl?: number;
      metadata?: Record<string, unknown>;
    },
  ): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: {
    prefix?: string;
    limit?: number;
    cursor?: string;
  }): Promise<{
    keys: Array<{ name: string; metadata?: Record<string, unknown> }>;
    list_complete: boolean;
    cursor?: string;
  }>;
}

interface CloudflareEnv {
  FRAGMENTS_KV?: KVNamespace;
}

declare module "cloudflare:workers" {
  const env: CloudflareEnv;
  export { env };
}
