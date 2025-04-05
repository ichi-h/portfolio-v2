import { style } from "@vanilla-extract/css";
import {
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  flexWrap,
  gap,
} from "portfolio-styles";

export const layout = style([flex, flexDirection["column"], gap[2]]);

export const matter = style([
  flex,
  flexJustify["end"],
  flexWrap["wrap"],
  gap[2],
]);

export const date = style([flex, gap[1], flexAlign["center"]]);
