import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { Hono } from "hono";
import { cache } from "hono/cache";
import satori from "satori";

import resvgWasmModule from "./node_modules/@resvg/resvg-wasm/index_bg.wasm";

type Env = {
  RESOURCE_SERVER_ORIGIN: string;
};

async function fetchFont({
  text,
  family = "Zen+Kaku+Gothic+New",
}: {
  text: string;
  family?: string;
}): Promise<ArrayBuffer | null> {
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(
    text + "ichi-h.com",
  )}`;

  const css = await (
    await fetch(googleFontsUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) return null;
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

const genModuleInit = () => {
  let isInit = false;
  return async () => {
    if (isInit) return;
    await initWasm(resvgWasmModule);
    isInit = true;
  };
};

const moduleInit = genModuleInit();

const ogpUseCase = async (title: string, imageUrl: string) => {
  await moduleInit();

  const fontData = await fetchFont({ text: title });

  const imageBuffer = await fetch(imageUrl).then((res) => res.arrayBuffer());
  const bytes = new Uint8Array(imageBuffer);
  const binStr = bytes.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    "",
  );
  const imageBase64 = btoa(binStr);

  const svg = await satori(
    {
      type: "div",
      key: "root",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "115%",
                      height: "70%",
                      backgroundColor: "#FCFCFC",
                      opacity: "0.9",
                      borderRadius: "16px",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    children: title,
                    style: {
                      fontSize: "54px",
                      width: "100%",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    children: "ichi-h.com",
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "42px",
                      width: "100%",
                    },
                  },
                },
              ],
              style: {
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "70%",
                color: "#1A1A1A",
              },
            },
          },
        ],
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundImage: `url(data:image/jpeg;base64,${imageBase64})`,
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Zen Kaku Gothic New",
          data: fontData,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  return new Resvg(svg).render().asPng();
};

const app = new Hono<{ Bindings: Env }>();

app.get(
  "/:title",
  cache({
    cacheName: (c) => c.req.param("title") || "ogp",
    cacheControl: "public, max-age=86400",
  }),
  async (c) => {
    const title = c.req.param("title") || "";
    const imageUrl = `${c.env.RESOURCE_SERVER_ORIGIN}/bg_ogp.jpg`;
    const png = await ogpUseCase(title, imageUrl);
    return new Response(png, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        Vary: "Accept-Encoding",
      },
    });
  },
);

export default app;
