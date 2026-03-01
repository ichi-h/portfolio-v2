import { style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  gap,
  maxW,
  minH,
  mx,
  my,
} from "portfolio-styles";

export const main = style([
  flex,
  flexDirection["column"],
  minH["dvh"],
  maxW[160],
  mx["auto"],
]);

export const content = style([flex, flexDirection["column"], gap[12], my[16]]);

export const list = style([
  flex,
  flexDirection["column"],
  gap[4],
  { listStyle: "none", padding: 0, margin: 0 },
]);

export const listItem = style({ lineHeight: "1.75" });

export const footer = style([flex, flexDirection["column"], gap[1]]);
