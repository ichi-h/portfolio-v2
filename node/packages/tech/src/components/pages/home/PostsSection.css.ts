import { style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  gap,
  py,
  applyMedia,
  flattenStyle,
  w,
  textAlign,
} from "portfolio-styles";

export const alignCenter = style([textAlign["center"]]);

export const postSection = style([
  flex,
  flexDirection["column"],
  gap[4],
  py[16],
  { maxWidth: "100vw", boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([py[12], gap[8]])),
  applyMedia({ max: "480" }, flattenStyle([py[8], gap[6]])),
]);

export const posts = style([w["1/1"]]);
