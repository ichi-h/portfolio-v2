import { style } from "@vanilla-extract/css";
import {
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  gap,
  minH,
  position,
  py,
  applyMedia,
  flattenStyle,
  fontSize,
  lineHeight,
} from "portfolio-styles";

export const contentSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[8],
  minH["svh"],
  position["relative"],
  py[16],
  { maxWidth: "100vw", boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([py[12], gap[8]])),
  applyMedia({ max: "480" }, flattenStyle([py[8], gap[6]])),
]);

export const heading = style([
  lineHeight[12],
  fontSize[16],
  applyMedia({ max: "480" }, flattenStyle([fontSize[12], lineHeight[3]])),
]);
