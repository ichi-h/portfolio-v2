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
  fontColor,
  maxW,
  m,
  mt,
  mb,
  minW,
  borderRadius,
  border,
  fontWeight,
  pt,
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

// Profile Section
export const profileSection = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
  p[6],
  { boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([p[5]])),
  applyMedia({ max: "480" }, flattenStyle([p[4]])),
]);

export const profileGrid = style([
  flex,
  flexDirection["column"],
  gap[3],
  w["1/1"],
]);

export const profileRow = style([
  flex,
  flexDirection["row"],
  gap[6],
  flexAlign["baseline"],
  applyMedia({ max: "480" }, flattenStyle([flexDirection["column"], gap[1]])),
]);

export const profileLabel = style([
  minW[32],
  fontSize[4],
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

export const mottoSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  w["1/1"],
  mb[6],
]);

export const typingText = style([
  fontSize[12],
  lineHeight[16],
  fontColor["mono.50"],
  { textAlign: "center" },
  applyMedia({ max: "768" }, flattenStyle([fontSize[8], lineHeight[12]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[6], lineHeight[8]])),
]);

// Career Section
export const careerSection = style([
  flex,
  flexDirection["column"],
  gap[8],
  w["1/1"],
  { boxSizing: "border-box" },
]);

export const careerList = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
  applyMedia({ max: "768" }, flattenStyle([gap[4]])),
]);

// Company Card for Career History
export const companyCard = style([
  p[6],
  borderRadius[3],
  border["1"],
  {
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  applyMedia({ max: "768" }, flattenStyle([p[5]])),
  applyMedia({ max: "480" }, flattenStyle([p[4]])),
]);

export const companyHeader = style([
  flex,
  flexDirection["column"],
  gap[2],
  mb[4],
]);

export const companyName = style([
  fontSize[6],
  lineHeight[7],
  { fontWeight: "bold" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[5]])),
]);

export const companyRole = style([
  fontSize[4],
  lineHeight[5],
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

export const companyPeriod = style([fontSize[3], lineHeight[4]]);

export const overviewList = style([
  flex,
  flexDirection["column"],
  gap[2],
  p[0],
  m[0],
  mt[4],
  fontSize[4],
  lineHeight[6],
  {
    listStylePosition: "outside",
    paddingLeft: "1.2rem",
  },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

export const categorySection = style([
  flex,
  flexDirection["column"],
  gap[4],
  mt[8],
  pt[6],
  {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
]);

export const categoryTitle = style([
  fontSize[6],
  lineHeight[7],
  { fontWeight: "bold" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[5]])),
]);

export const categoryDescription = style([
  flex,
  flexDirection["column"],
  gap[3],
  fontSize[4],
  lineHeight[6],
  mb[4],
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

export const categoryItemList = style([
  flex,
  flexDirection["column"],
  gap[2],
  p[0],
  m[0],
  fontSize[4],
  lineHeight[6],
  {
    listStylePosition: "outside",
    paddingLeft: "1.2rem",
  },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

export const detailParagraph = style([
  mb[3],
  fontSize[4],
  lineHeight[6],
  {
    display: "block",
  },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

// Details/Summary - Improved UI
export const detailsElement = style([mt[2]]);

export const summaryElement = style([
  fontWeight["bold"],
  {
    cursor: "pointer",
    listStyle: "none",
    display: "inline-block",
    position: "relative",
    paddingLeft: "1.2rem",
  },
]);

globalStyle(`${summaryElement}::-webkit-details-marker`, {
  display: "none",
});

globalStyle(`${summaryElement}::before`, {
  content: '"▸"',
  position: "absolute",
  left: 0,
  color: "rgba(255, 255, 255, 0.5)",
  transition: "transform 0.2s ease",
});

globalStyle(`${summaryElement}:hover`, {
  color: "rgba(255, 255, 255, 0.9)",
});

globalStyle(`details[open] ${summaryElement}::before`, {
  transform: "rotate(90deg)",
});

export const summaryText = style([
  fontSize[4],
  { display: "inline" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

export const detailsContent = style([
  fontSize[4],
  lineHeight[6],
  mt[3],
  p[4],
  { borderRadius: "8px", borderLeft: "3px solid rgba(255, 255, 255, 0.2)" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5], p[3]])),
]);

// Skill Section
export const skillSection = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
  { boxSizing: "border-box" },
]);

export const legendText = style([
  { textAlign: "center" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

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
