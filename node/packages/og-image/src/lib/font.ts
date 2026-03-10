export async function fetchFont({
  text,
  family = "Zen+Kaku+Gothic+New",
}: {
  text: string;
  family?: string;
}): Promise<ArrayBuffer | null> {
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;

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
