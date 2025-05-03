import { style } from "@vanilla-extract/css";
import {
  w,
  flex,
  flexAlign,
  flexDirection,
  textAlign,
  gap,
  my,
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
  my[4],
  pb[2],
  mx[0],
  textAlign["center"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[3], pb[0]])),
]);
