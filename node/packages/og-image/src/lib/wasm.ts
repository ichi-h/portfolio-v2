import { initWasm } from "@resvg/resvg-wasm";

import resvgWasmModule from "../../node_modules/@resvg/resvg-wasm/index_bg.wasm";

let initialized = false;

export async function ensureResvgInitialized(): Promise<void> {
  if (initialized) return;
  await initWasm(resvgWasmModule);
  initialized = true;
}
