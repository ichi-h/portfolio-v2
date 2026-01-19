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
  position,
  top,
  bottom,
  mx,
  mt,
  mb,
} from "portfolio-styles";

export const topSection = style([
  position["sticky"],
  top[0],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  w["1/1"],
  h["vh"],
]);

export const inner = style([
  position["relative"],
  w["1/1"],
  h["1/1"],
  mx["16"],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  applyMedia({ max: "1024" }, flattenStyle([mx["8"]])),
  applyMedia({ max: "768" }, flattenStyle([mx["8"]])),
  applyMedia({ max: "480" }, flattenStyle([mx["4"]])),
  applyMedia({ max: "375" }, flattenStyle([mx["4"]])),
]);

export const header = style([
  position["absolute"],
  top[0],
  flex,
  flexJustify["between"],
  flexAlign["end"],
  w["1/1"],
  mt[2],
  applyMedia({ max: "480" }, flattenStyle([mt[1]])),
]);

export const headerLeft = style([]);

export const headerRight = style([]);

export const footer = style([
  position["absolute"],
  bottom[0],
  flex,
  flexJustify["between"],
  flexAlign["center"],
  w["1/1"],
  mb[6],
  applyMedia({ max: "768" }, flattenStyle([mb[4]])),
]);

export const footerLeft = style([]);

export const footerRight = style([]);

export const worksLinkText = style([
  flex,
  flexAlign["center"],
  gap[1],
  fontSize[6],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4]])),
]);

export const worksLinkIcon = style([
  w[6],
  h[6],
  applyMedia({ max: "768" }, flattenStyle([w[4], h[4]])),
]);

export const scrollIcon = style([
  w[12],
  h[12],
  applyMedia({ max: "768" }, flattenStyle([w[8], h[8]])),
  applyMedia({ max: "480" }, flattenStyle([w[6], h[6]])),
]);

export const title = style([
  lineHeight[12],
  fontSize[8],
  applyMedia({ max: "480" }, flattenStyle([fontSize[6], lineHeight[3]])),
  applyMedia({ max: "375" }, flattenStyle([fontSize[6], lineHeight[3]])),
]);

export const me = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[4],
  w["1/1"],
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const avatarLink = style([animateZoomOnHover["md"]]);

export const avatar = style([
  dropShadow["md"],
  w[48],
  h[48],
  applyMedia({ max: "480" }, flattenStyle([w[32], h[32]])),
]);

export const name = style([
  fontSize[12],
  mt["-2"],
  applyMedia({ max: "480" }, flattenStyle([fontSize[8]])),
]);

export const mottoText = style([
  fontSize[6],
  applyMedia({ max: "576" }, flattenStyle([fontSize[4]])),
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
  h[8],
  w[8],
  applyMedia({ max: "480" }, flattenStyle([h[6], w[6]])),
]);

export const overlay = style([
  position["fixed"],
  top[0],
  w["1/1"],
  h["1/1"],
  {
    pointerEvents: "none",
  },
]);
