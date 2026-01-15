import { style, globalStyle } from "@vanilla-extract/css";
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
  flexWrap,
  maxW,
  m,
  mt,
  mb,
  minW,
  borderRadius,
  border,
  fontWeight,
  px,
  py,
  COLOR,
  COLOR_OPACITY,
  dropShadow,
} from "portfolio-styles";

export const aboutMe = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  w["1/1"],
]);

export const content = style([
  maxW[256],
  borderRadius[4],
  py[4],
  px[8],
  dropShadow["md"],
  { backgroundColor: COLOR["mono.800"] + COLOR_OPACITY[90] },
  applyMedia({ max: "768" }, flattenStyle([px[5]])),
  applyMedia({ max: "480" }, flattenStyle([px[4]])),
]);

export const article = style([mt[-2]]);

export const section = style([mb[4]]);

export const heading = style([mt[2]]);

export const careerList = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
  applyMedia({ max: "768" }, flattenStyle([gap[4]])),
]);

// Skill Section
export const skillGrid = style([
  flex,
  flexWrap["wrap"],
  gap[6],
  w["1/1"],
  applyMedia({ max: "768" }, flattenStyle([gap[4]])),
]);

export const skillCategory = style([
  flex,
  flexDirection["column"],
  gap[3],
  minW[48],
  p[6],
  borderRadius[3],
  border["1"],
  {
    flex: "0 0 calc(33.% - 1.5rem)", // flex-grow: 0 で伸びないようにする
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  applyMedia(
    { max: "768" },
    flattenStyle([{ flex: "0 0 calc(50% - 1rem)" }, p[5]]),
  ),
  applyMedia(
    { max: "480" },
    flattenStyle([{ flex: "1 1 100%" }, minW[0], p[4]]),
  ),
]);

export const skillCategoryTitle = style([
  fontSize[5],
  lineHeight[6],
  fontWeight["bold"],
  mb[2],
  applyMedia({ max: "480" }, flattenStyle([fontSize[4]])),
]);

export const skillList = style([
  flex,
  flexDirection["column"],
  gap[2],
  p[0],
  m[0],
  fontSize[4],
  {
    listStylePosition: "outside",
    paddingLeft: "1.2rem",
    color: "rgba(255, 255, 255, 0.7)", // mono.50 color for list markers
  },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

// Global style for list markers color
globalStyle(`${skillList} li::marker`, {
  color: "rgba(255, 255, 255, 0.7)", // mono.50
});

// Hide list markers for li inside details
globalStyle(`details li`, {
  listStyle: "none",
});
