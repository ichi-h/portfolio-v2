import { renderToImage } from "../lib/render";

/**
 * Generates OGP image for fragments.
 * When title is provided, creates an OGP for a specific fragment with the subtitle.
 * When title is omitted, creates the index page OGP showing "fragments.ichi-h.com".
 */
export const fragmentOgpUseCase = async (
  title?: string,
): Promise<Uint8Array> => {
  const displayTitle = title ?? "fragments.ichi-h.com";

  const children: Record<string, unknown>[] = [
    {
      type: "div",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: displayTitle,
              style: {
                display: "flex",
                justifyContent: "center",
                fontSize: "72px",
                width: "100%",
              },
            },
          },
        ],
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "70%",
          color: "#1A1A1A",
        },
      },
    },
  ];

  if (title !== undefined) {
    children.push({
      type: "div",
      props: {
        children: "fragments.ichi-h.com",
        style: {
          position: "absolute",
          bottom: "32px",
          left: "873px",
          fontSize: "32px",
          width: "100%",
        },
      },
    });
  }

  return renderToImage(
    {
      type: "div",
      key: "root",
      props: {
        children,
        style: {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#B3B3B3",
        },
      },
    },
    {
      fontFamily: "Zen+Kaku+Gothic+Antique",
      fontName: "Zen Kaku Gothic Antique",
      fontText: (title ?? "") + "fragments.ichi-h.com",
    },
  );
};
