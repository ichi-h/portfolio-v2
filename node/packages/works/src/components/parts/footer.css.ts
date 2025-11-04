import { style } from "@vanilla-extract/css";
import {
  w,
  flex,
  flexAlign,
  flexDirection,
  textAlign,
  gap,
  mt,
  mx,
  applyMedia,
  flattenStyle,
  fontSize,
  pb,
} from "portfolio-styles";

export const footerStyle = style([
  flex,
  flexAlign["center"],
  flexDirection["column"],
  gap[1],
  w["1/1"],
  mt[0],
  pb[4],
  mx[0],
  textAlign["center"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[3]])),
]);
