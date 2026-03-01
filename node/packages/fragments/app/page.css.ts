import { style } from "@vanilla-extract/css";
import {
  applyMedia,
  flattenStyle,
  flex,
  flexDirection,
  gap,
  maxW,
  minH,
  mx,
  my,
  px,
} from "portfolio-styles";

export const main = style([
  flex,
  flexDirection["column"],
  minH["dvh"],
  maxW[160],
  mx["auto"],
  applyMedia({ max: "768" }, flattenStyle([px[8]])),
  applyMedia({ max: "480" }, flattenStyle([px[4]])),
]);

export const content = style([
  flex,
  flexDirection["column"],
  gap[12],
  my[16],
  applyMedia({ max: "768" }, flattenStyle([gap[8], my[12]])),
  applyMedia({ max: "480" }, flattenStyle([gap[6], my[8]])),
]);

export const list = style([
  flex,
  flexDirection["column"],
  gap[4],
  { listStyle: "none", padding: 0, margin: 0 },
]);

export const listItem = style({ lineHeight: "1.75" });

export const footer = style([flex, flexDirection["column"], gap[1]]);
