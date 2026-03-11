import { globalStyle, style } from "@vanilla-extract/css";
import { bg, m } from "portfolio-styles";

export const html = style([bg["mono.800"], m[0]]);

globalStyle(`${html}`, {
  fontFamily:
    '"Zen Kaku Gothic Antique", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
});

globalStyle(`${html} body`, m[0]);
