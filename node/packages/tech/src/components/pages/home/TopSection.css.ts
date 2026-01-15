import { style } from "@vanilla-extract/css";
import {
  w,
  h,
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
  py,
  REM,
  position,
  top,
} from "portfolio-styles";

export const topSection = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[8],
  w["1/1"],
  py[16],
  {
    maxWidth: "100vw",
    boxSizing: "border-box",
    height: `calc(100dvh - ${REM[12]})`,
  },
  applyMedia(
    { max: "768" },
    flattenStyle([position["sticky"], top[0], py[12], gap[8]]),
  ),
  applyMedia({ max: "480" }, flattenStyle([py[8], gap[6]])),
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
  gap[4],
  applyMedia({ max: "375" }, flattenStyle([w[32]])),
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const links = style([
  flex,
  gap[6],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const navigation = style([
  flex,
  flexDirection["row"],
  gap[6],
  w["1/1"],
  flexJustify["center"],
  applyMedia({ max: "768" }, flattenStyle([flexDirection["column"], gap[3]])),
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const navText = style([
  fontSize[6],
  lineHeight[5],
  applyMedia({ max: "480" }, flattenStyle([fontSize[4]])),
]);

export const snsLink = style([animateZoomOnHover["lg"]]);

export const snsIcon = style([
  h[12],
  w[12],
  applyMedia({ max: "375" }, flattenStyle([h[8], w[8]])),
]);
