import { style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  gap,
  maxW,
  minH,
  mx,
  position,
  px,
  py,
  pb,
  bottom,
  left,
  fontColor,
  fontSize,
} from "portfolio-styles";

export const wrapper = style([position["relative"], minH["dvh"]]);

export const main = style([
  flex,
  flexDirection["column"],
  maxW[160],
  mx["auto"],
  px[8],
  py[16],
  pb[32],
  gap[8],
]);

export const dataSection = style([flex, flexDirection["column"], gap[4]]);

export const dataTitle = style([fontSize["3"], fontColor["mono.400"]]);

export const dataList = style({
  margin: 0,
  padding: 0,
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  rowGap: "0.5rem",
  columnGap: "1.5rem",
});

export const dt = style([
  fontSize["3"],
  fontColor["mono.400"],
  { paddingTop: "0.125rem" },
]);

export const dd = style([
  fontSize["4"],
  fontColor["mono.50"],
  { margin: 0, wordBreak: "break-all" },
]);

export const ddContent = style([
  fontSize["4"],
  fontColor["mono.50"],
  { margin: 0, whiteSpace: "pre-wrap", lineHeight: "1.75" },
]);

export const backNav = style([position["fixed"], bottom[8], left[8]]);

export const backLink = style([
  flex,
  { opacity: 0.8, transition: "opacity 0.15s" },
  { selectors: { "&:hover": { opacity: 1 } } },
]);
