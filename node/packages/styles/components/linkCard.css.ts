import { style, styleVariants } from "@vanilla-extract/css";

import { applyMedia, flattenStyle } from "../libs/vanillaExtract";
import {
  animateZoomOnHover,
  bg,
  bgPosition,
  bgSize,
  border,
  borderColor,
  borderRadius,
  dropShadow,
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  gap,
  h,
  maxW,
  minH,
  p,
  w,
} from "../styles";

export const hoverAnimation = style([animateZoomOnHover["sm"]]);
export const linkCard = style([
  border["1"],
  borderColor["mono.500"],
  borderRadius["1"],
  dropShadow["md"],
  p[4],
]);
export const linkCardVariant = styleVariants({
  light: flattenStyle([bg["mono.50"]]),
  dark: flattenStyle([bg["mono.800"]]),
});
export const layout = style([
  flex,
  flexJustify["between"],
  w["1/1"],
  h["1/1"],
  gap[4],
]);
export const thumbnail = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  w["1/1"],
  h["auto"],
  bgSize["cover"],
  bgPosition["center"],
  maxW["1/4"],
  minH["24"],
  bg["mono.200"],
  applyMedia({ max: "1280" }, { display: "none" }),
]);
export const content = style([
  flex,
  flexDirection["column"],
  gap[2],
  maxW["3/4"],
  applyMedia({ max: "1280" }, flattenStyle([maxW["1/1"]])),
]);
export const title = style([flex, flexAlign["center"], gap[1]]);
export const unstyledAnchor = style([
  {
    textDecoration: "none !important",
    color: "inherit !important",
    cursor: "pointer !important",
    ":before": {
      textDecoration: "none !important",
    },
  },
]);
