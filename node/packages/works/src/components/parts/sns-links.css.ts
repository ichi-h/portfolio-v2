import { style, styleVariants } from "@vanilla-extract/css";
import {
  w,
  h,
  flex,
  gap,
  animateZoomOnHover,
  applyMedia,
  flattenStyle,
} from "portfolio-styles";

export const links = style([
  flex,
  gap[6],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const linksGapVariant = styleVariants({
  normal: flattenStyle([
    gap[6],
    applyMedia({ max: "480" }, flattenStyle([gap[4]])),
  ]),
  small: flattenStyle([gap[4]]),
});

export const snsLink = style([animateZoomOnHover["lg"]]);

export const snsIcon = style([
  h[8],
  w[8],
  applyMedia({ max: "480" }, flattenStyle([h[6], w[6]])),
]);
