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
} from "portfolio-styles";

export const mottoSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  w["1/1"],
  h["dvh"],
]);

export const mottoText = style([
  fontSize[7],
  applyMedia({ max: "576" }, flattenStyle([fontSize[4]])),
]);
