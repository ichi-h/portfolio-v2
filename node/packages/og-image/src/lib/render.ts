import { Resvg } from "@resvg/resvg-wasm";
import satori from "satori";

import { fetchFont } from "./font";
import { ensureResvgInitialized } from "./wasm";

type SatoriNode = Parameters<typeof satori>[0];

interface RenderOptions {
  fontFamily?: string;
  fontName: string;
  fontText: string;
}

export async function renderToImage(
  element: SatoriNode,
  options: RenderOptions,
): Promise<Uint8Array> {
  await ensureResvgInitialized();

  const fontData = await fetchFont({
    text: options.fontText,
    family: options.fontFamily,
  });

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: options.fontName,
        data: fontData,
        weight: 400,
        style: "normal" as const,
      },
    ],
  });

  return new Resvg(svg).render().asPng();
}
