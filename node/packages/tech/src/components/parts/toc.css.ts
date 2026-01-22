import { style } from "@vanilla-extract/css";
import {
  applyMedia,
  flattenStyle,
  flex,
  fontSize,
  gap,
} from "portfolio-styles";

export const toc = style([
  flex,
  gap[4],
  fontSize[6],
  applyMedia({ max: "768" }, flattenStyle([fontSize[5]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[4], gap[2]])),
]);
