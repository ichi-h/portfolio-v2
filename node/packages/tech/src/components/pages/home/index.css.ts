import { keyframes, style, globalStyle } from "@vanilla-extract/css";
import {
  w,
  h,
  position,
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  gap,
  animateZoomOnHover,
  dropShadow,
  applyMedia,
  flattenStyle,
  fontSize,
  lineHeight,
  top,
  left,
  opacity,
  visibility,
  p,
  px,
  py,
  pt,
  flexWrap,
  fontColor,
  animationName,
  bg,
  animationDuration,
  animationTimingFunction,
  animationFillMode,
  animationDelay,
  minH,
  maxW,
  m,
  mt,
  mb,
  minW,
  bottom,
  right,
  borderRadius,
  border,
} from "portfolio-styles";
import {
  buttonLgSizeProps,
  buttonMdSizeProps,
  buttonXlSizeProps,
} from "portfolio-styles/components/button.css";

// Global fix for horizontal scrollbar
globalStyle("html, body", {
  overflowX: "hidden",
  maxWidth: "100vw",
});

const fadeOut = keyframes({
  "0%": flattenStyle([opacity[100], visibility["visible"]]),
  "100%": flattenStyle([opacity[0], visibility["hidden"]]),
});

const fadeIn = keyframes({
  "0%": flattenStyle([opacity[0], visibility["hidden"]]),
  "100%": flattenStyle([opacity[100], visibility["visible"]]),
});

export const overlay = style([
  position["fixed"],
  top[0],
  left[0],
  w["1/1"],
  h["svh"],
  bg["mono.900"],
  animationName(fadeOut),
  animationDuration["500"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  { maxWidth: "100vw" },
]);

export const contentAnimation = style([
  opacity[0],
  animationName(fadeIn),
  animationDuration["500"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  animationDelay["500"],
  { maxWidth: "100vw", overflowX: "hidden" },
]);

export const contentSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[12],
  w["1/1"],
  minH["svh"],
  position["relative"],
  py[16],
  { maxWidth: "100vw", boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([py[12], gap[8]])),
  applyMedia({ max: "480" }, flattenStyle([py[8], gap[6]])),
]);

export const topSection = style([
  contentSection,
]);

export const topLink = style([
  position["absolute"],
  bottom[8],
  right[8],
  applyMedia({ max: "480" }, flattenStyle([bottom[4], right[4]])),
]);

export const me = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[6],
]);

export const avatarLink = style([animateZoomOnHover["md"]]);

export const avatar = style([
  dropShadow["md"],
  w[64],
  h[64],
  applyMedia({ max: "1512" }, flattenStyle([w[48], h[48]])),
  applyMedia({ max: "480" }, flattenStyle([w[32], h[32]])),
]);

export const title = style([
  lineHeight[12],
  fontSize[16],
  applyMedia({ max: "480" }, flattenStyle([fontSize[12], lineHeight[3]])),
]);

export const heading = style([
  lineHeight[12],
  fontSize[16],
  applyMedia({ max: "480" }, flattenStyle([fontSize[12], lineHeight[3]])),
]);

export const description = style([
  lineHeight[7],
  fontSize[6],
  applyMedia({ max: "768" }, flattenStyle([fontSize[5], lineHeight[4]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[4], lineHeight[3]])),
]);

export const content = style([
  flex,
  flexDirection["row"],
  flexJustify["center"],
  flexAlign["center"],
  gap[12],
  w["1/1"],
  applyMedia(
    { max: "768" },
    flattenStyle([
      w["1/1"],
      flexAlign["center"],
      flexDirection["column"],
      gap[4],
    ]),
  ),
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const contentBox = style([
  flex,
  flexDirection["column"],
  flexAlign["center"],
  w[48],
  gap[4],
  applyMedia({ max: "375" }, flattenStyle([w[32]])),
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const links = style([
  flex,
  gap[6],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const snsLink = style([animateZoomOnHover["lg"]]);

export const snsIcon = style([
  h[12],
  w[12],
  applyMedia({ max: "375" }, flattenStyle([h[8], w[8]])),
]);

export const enterButton = style([
  flattenStyle(buttonXlSizeProps),
  applyMedia({ max: "768" }, flattenStyle(buttonLgSizeProps)),
  applyMedia({ max: "375" }, flattenStyle(buttonMdSizeProps)),
]);

export const footer = style([w["1/1"]]);

export const mottoSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  w["1/1"],
  minH["1/2"],
  mb[12],
]);

export const typingText = style([
  fontSize[12],
  lineHeight[16],
  { textAlign: "center" },
  applyMedia({ max: "768" }, flattenStyle([fontSize[8], lineHeight[12]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[6], lineHeight[8]])),
]);

// About Content Container
export const aboutContent = style([
  flex,
  flexDirection["column"],
  gap[16],
  w["1/1"],
  maxW[256], // 1024px max width for readability
  px[8],
  { boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([px[6], gap[12]])),
  applyMedia({ max: "480" }, flattenStyle([px[4], gap[8]])),
]);

// Profile Section
export const profileSection = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
  py[8],
  px[6],
  bg["mono.800"],
  { borderRadius: "12px", boxSizing: "border-box" },
  applyMedia({ max: "768" }, flattenStyle([py[6], px[4]])),
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

// Career Section
export const careerSection = style([
  flex,
  flexDirection["column"],
  gap[8],
  w["1/1"],
  { boxSizing: "border-box" },
]);

export const sectionTitle = style([
  fontSize[12],
  lineHeight[16],
  mb[6],
  applyMedia({ max: "768" }, flattenStyle([fontSize[8], lineHeight[12], mb[4]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[6], lineHeight[8]])),
]);

export const careerItem = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/1"],
]);

export const careerTitle = style([
  fontSize[8],
  lineHeight[12],
  applyMedia({ max: "768" }, flattenStyle([fontSize[6], lineHeight[8]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[5], lineHeight[7]])),
]);

export const careerPeriod = style([
  fontSize[4],
  mb[4],
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

export const careerList = style([
  flex,
  flexDirection["column"],
  gap[3],
  p[0],
  m[0],
  mt[4],
  fontSize[4],
  lineHeight[6],
  { listStylePosition: "outside", paddingLeft: "1.5rem" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

export const careerCategory = style([
  flex,
  flexDirection["column"],
  gap[4],
  mt[8],
  pt[6],
  { borderTop: "1px solid rgba(255, 255, 255, 0.1)" },
]);

export const categoryTitle = style([
  fontSize[6],
  lineHeight[8],
  mb[2],
  applyMedia({ max: "768" }, flattenStyle([fontSize[5], lineHeight[7]])),
  applyMedia({ max: "480" }, flattenStyle([fontSize[4], lineHeight[6]])),
]);

export const categoryText = style([
  fontSize[4],
  lineHeight[6],
  applyMedia({ max: "480" }, flattenStyle([fontSize[3], lineHeight[5]])),
]);

// Details/Summary - Improved UI
export const detailsElement = style([
  mt[2],
]);

export const summaryElement = style([
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
  bg["mono.800"],
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

export const skillLegend = style([
  flex,
  flexJustify["center"],
  mb[6],
  p[4],
  bg["mono.800"],
  { borderRadius: "8px" },
]);

export const legendText = style([
  fontSize[3],
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
  { flex: "1 1 calc(33.333% - 1.5rem)" },
  applyMedia({ max: "768" }, flattenStyle([{ flex: "1 1 calc(50% - 1rem)" }])),
  applyMedia({ max: "480" }, flattenStyle([{ flex: "1 1 100%" }, minW[0]])),
]);

export const skillCategoryTitle = style([
  fontSize[5],
  lineHeight[6],
  fontColor["mono.200"],
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
  { listStylePosition: "outside", paddingLeft: "1.2rem" },
  applyMedia({ max: "480" }, flattenStyle([fontSize[3]])),
]);

// Posts Section
export const postList = style([
  flex,
  flexDirection["column"],
  gap[4],
  w["1/1"],
  maxW[192],
]);

export const postLink = style([
  fontSize[5],
  animateZoomOnHover["sm"],
]);
