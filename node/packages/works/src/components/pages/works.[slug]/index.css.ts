import { style } from "@vanilla-extract/css";
import {
  flex,
  flexAlign,
  flexDirection,
  flexWrap,
  gap,
  mt,
} from "portfolio-styles";

export const layout = style([flex, flexDirection["column"], gap[2]]);

export const matter = style([
  flex,
  flexDirection["column"],
  flexAlign["end"],
  flexWrap["wrap"],
]);

export const date = style([flex, gap[1], flexAlign["center"]]);

export const ccImage = style([
  mt[1],
]);
