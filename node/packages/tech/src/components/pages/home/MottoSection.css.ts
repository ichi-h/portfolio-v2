import { style } from "@vanilla-extract/css";
import {
  w,
  h,
  flex,
  flexJustify,
  flexAlign,
  fontSize,
  applyMedia,
  flattenStyle,
  flexDirection,
  gap,
  position,
  bottom,
} from "portfolio-styles";

export const mottoSection = style([
  position["relative"],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  w["1/1"],
  h["dvh"],
  applyMedia({ max: "576" }, flattenStyle([gap[2]])),
]);

export const marginTop = style([w["1/1"], { height: "25vh" }]);
export const marginBottom = style([w["1/1"], { height: "75vh" }]);

export const mottoText = style([
  fontSize[7],
  applyMedia({ max: "576" }, flattenStyle([fontSize[4]])),
]);

export const scrollIcon = style([
  position["absolute"],
  bottom[8],
]);
