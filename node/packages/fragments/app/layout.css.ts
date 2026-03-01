import { globalStyle, style } from "@vanilla-extract/css";
import { bg, flattenStyle, m } from "portfolio-styles";

export const html = style([bg["mono.900"], m[0]]);

globalStyle(`${html}`, {
  fontFamily:
    '"Zen Kaku Gothic New", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
});

globalStyle(`${html} body`, flattenStyle([
  m[0],
]));

globalStyle(`${html} a`, { color: "inherit" });
