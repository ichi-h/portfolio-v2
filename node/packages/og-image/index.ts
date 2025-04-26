import { Hono } from "hono";
import { cache } from "hono/cache";
import satori from "satori";

const ogpUseCase = async (title: string, imageUrl: string) => {
  const fontData = await fetch(
    "https://github.com/googlefonts/zen-kakugothic/raw/main/fonts/ttf/ZenKakuGothicNew-Regular.ttf",
  ).then((res) => res.arrayBuffer());

  const imageBuffer = await fetch(imageUrl).then((res) => res.arrayBuffer());
  const bytes = new Uint8Array(imageBuffer);
  const binStr = bytes.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    "",
  );
  const imageBase64 = btoa(binStr);

  const generateOgpSvg = async () =>
    await satori(
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
  return await generateOgpSvg();
};

const app = new Hono();

app.get(
  "/",
  cache({
    cacheName: (c) => c.req.query("title") || "ogp",
    cacheControl: "public, max-age=86400",
  }),
  async (c) => {
    const title = c.req.query("title") || "";
    const imageUrl = `${c.env?.RESOURCE_SERVER_ORIGIN}/bg_ogp.jpg`;
    const svg = await ogpUseCase(title, imageUrl);
    c.status(200);
    c.header("Content-Type", "image/svg+xml");
    c.header("Vary", "Accept-Encoding");
    return c.body(svg);
  },
);

export default app;
