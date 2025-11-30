import { globalStyle, style } from "@vanilla-extract/css";
import { bg, m } from "portfolio-styles";

export const html = style([bg["mono.900"], m[0]]);

// System font stack - no web fonts
globalStyle(`${html}`, {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji"',
  fontStyle: "normal",
});

globalStyle(
  `${html} button, ${html} input, ${html} optgroup, ${html} select, ${html} textarea`,
  {
    fontFamily: "inherit",
  },
);

globalStyle(`${html} body`, m[0]);

globalStyle(`${html} ul`, m[0]);

globalStyle(`${html} code`, {
  fontFamily:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace, "Segoe UI Emoji"',
});
