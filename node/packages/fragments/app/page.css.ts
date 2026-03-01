import { style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  gap,
  maxW,
  minH,
  mx,
  px,
  py,
  mt,
} from "portfolio-styles";

export const main = style([
  flex,
  flexDirection["column"],
  minH["dvh"],
  maxW[160],
  mx["auto"],
  py[16],
  px[8],
  gap[12],
]);

export const list = style([
  flex,
  flexDirection["column"],
  gap[4],
  { listStyle: "none", padding: 0, margin: 0 },
]);

export const listItem = style({ lineHeight: "1.75" });

export const footer = style([
  flex,
  flexDirection["column"],
  gap[1],
  mt["auto"],
]);
