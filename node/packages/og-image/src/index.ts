import { Hono } from "hono";
import { cache } from "hono/cache";

import { fragmentOgpUseCase } from "./usecases/fragment-ogp";
import { ogpUseCase } from "./usecases/ogp";

import type { Env } from "./env";

const app = new Hono<{ Bindings: Env }>();

function pngResponse(png: Uint8Array): Response {
  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      Vary: "Accept-Encoding",
    },
  });
}

app.get(
  "/fragments/:title",
  cache({
    cacheName: (c) => `fragments.${c.req.param("title")}` || "fragments.ogp",
    cacheControl: "public, max-age=86400",
  }),
  async (c) => {
    const title = c.req.param("title") || "";
    const png = await fragmentOgpUseCase(title);
    return pngResponse(png);
  },
);

app.get(
  "/fragments",
  cache({
    cacheName: () => "fragments",
    cacheControl: "public, max-age=86400",
  }),
  async () => {
    const png = await fragmentOgpUseCase();
    return pngResponse(png);
  },
);

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
    return pngResponse(png);
  },
);

export default app;
