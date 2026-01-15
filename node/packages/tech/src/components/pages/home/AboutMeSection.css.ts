import { style } from "@vanilla-extract/css";
import {
  w,
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  gap,
  applyMedia,
  flattenStyle,
  fontSize,
  lineHeight,
  p,
  maxW,
  m,
  mt,
  mb,
  borderRadius,
  border,
  fontWeight,
  px,
  py,
  COLOR,
  COLOR_OPACITY,
  dropShadow,
  grid,
  gridCols,
  gridRows,
  borderColor,
  borderStyle,
  my,
  fontColor,
  pl,
  bg,
} from "portfolio-styles";

const itemBorder = [
  p[4],
  border["2"],
  borderColor["mono.700"],
  borderStyle["solid"],
  borderRadius[4],
];

export const aboutMe = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  w["1/1"],
]);

export const content = style([
  flex,
  flexDirection["column"],
  gap[2],
  maxW[256],
  borderRadius[4],
  py[4],
  px[8],
  dropShadow["md"],
  bg["mono.800"],
  applyMedia({ max: "768" }, flattenStyle([px[5]])),
  applyMedia({ max: "480" }, flattenStyle([px[4]])),
]);

export const article = style([mt[-2]]);

export const section = style([mb[4]]);

export const heading = style([mt[2]]);

export const careerList = style([flex, flexDirection["column"], gap[4], mt[4]]);

export const careerItem = style([w["auto"], ...itemBorder]);

export const skillGrid = style([
  grid,
  gridCols[3],
  gridRows[1],
  gap[6],
  w["1/1"],
  my[4],
  applyMedia({ max: "1024" }, flattenStyle([gridCols[2]])),
  applyMedia({ max: "576" }, flattenStyle([gridCols[1]])),
]);

export const skillCategory = style([
  flex,
  flexDirection["column"],
  ...itemBorder,
]);

export const skillCategoryTitle = style([
  fontSize[5],
  lineHeight[6],
  fontWeight["bold"],
  mb[2],
]);

export const skillList = style([
  flex,
  flexDirection["column"],
  pl[5],
  m[0],
  fontSize[4],
  fontColor["mono.50"],
]);
