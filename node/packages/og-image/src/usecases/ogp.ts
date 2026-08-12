import { renderToImage } from "../lib/render";

export const ogpUseCase = async (title: string): Promise<Uint8Array> => {
  return renderToImage(
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
          backgroundColor: "#1a1a1a",
        },
      },
    },
    {
      fontName: "Zen Kaku Gothic New",
      fontText: title + "ichi-h.com",
    },
  );
};
