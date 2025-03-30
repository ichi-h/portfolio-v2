import { style } from "@vanilla-extract/css";
import {
  w,
  h,
  position,
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  gap,
  bottom,
  animateZoomOnHover,
  dropShadow,
  applyMedia,
  flattenStyle,
  fontSize,
  lineHeight,
  mb,
  borderL,
  borderY,
  borderR,
  borderColor,
  borderStyle,
} from "portfolio-styles";

export const outer = style([
  position["relative"],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[12],
  w["1/1"],
  h["vh"],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const me = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[4],
]);

export const avatar = style([
  animateZoomOnHover["md"],
  dropShadow["md"],
  w[64],
  h[64],
  applyMedia({ max: "1024" }, flattenStyle([w[48], h[48]])),
  applyMedia({ max: "480" }, flattenStyle([w[32], h[32]])),
]);

export const title = style([
  lineHeight[12],
  fontSize[16],
  applyMedia({ max: "480" }, flattenStyle([fontSize[12], lineHeight[3]])),
]);

export const content = style([
  flex,
  flexDirection["row"],
  flexJustify["center"],
  flexAlign["center"],
  gap[12],
  mb[3],
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

export const categoryTitle = style([
  lineHeight[8],
  fontSize[12],
  applyMedia({ max: "480" }, flattenStyle([fontSize[7]])),
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

export const separator = style([
  {
    display: "block",
  },
  borderL[1],
  borderY[0],
  borderR[0],
  borderColor["mono.50"],
  borderStyle["solid"],
  h["1/1"],
  applyMedia(
    { max: "768" },
    {
      display: "none",
    },
  ),
]);

export const footer = style([position["absolute"], bottom[0], w["1/1"]]);
