import { keyframes, style } from "@vanilla-extract/css";
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
  top,
  left,
  bg,
  opacity,
  visibility,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationFillMode,
  animationDelay,
  mt,
  mx,
  maxW,
} from "portfolio-styles";

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
  w["vw"],
  h["vh"],
  bg["mono.900"],
  animationName(fadeOut),
  animationDuration["500"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
]);

export const outer = style([
  position["relative"],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  maxW["vw"],
  h["svh"],

  mx["16"],
  applyMedia({ max: "1024" }, flattenStyle([mx["8"]])),
  applyMedia({ max: "768" }, flattenStyle([mx["8"]])),
  applyMedia({ max: "480" }, flattenStyle([mx["4"]])),
  applyMedia({ max: "375" }, flattenStyle([mx["4"]])),

  gap[12],
  applyMedia({ max: "1280" }, flattenStyle([gap[6]])),
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),

  animationName(fadeIn),
  opacity[0],
  animationDuration["500"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  animationDelay["500"],
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

export const me = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[6],
  w["1/1"],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const name = style([
  fontSize[12],
  lineHeight[12],
  mt["-2"],
  applyMedia({ max: "480" }, flattenStyle([fontSize[8]])),
]);

export const avatarLink = style([animateZoomOnHover["md"]]);

export const pageLinks = style([
  flex,
  gap[8],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const pageLink = style([
  fontSize[7],
  lineHeight[7],
  applyMedia({ max: "480" }, flattenStyle([fontSize[5], lineHeight[5]])),
]);

export const avatar = style([
  dropShadow["soft"],
  w[48],
  h[48],
  applyMedia({ max: "480" }, flattenStyle([w[32], h[32]])),
]);

export const title = style([
  lineHeight[12],
  fontSize[8],
  applyMedia({ max: "480" }, flattenStyle([fontSize[6], lineHeight[3]])),
  applyMedia({ max: "375" }, flattenStyle([fontSize[6], lineHeight[3]])),
]);

export const links = style([
  flex,
  gap[6],
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const snsLink = style([animateZoomOnHover["lg"]]);

export const snsIcon = style([
  h[8],
  w[8],
  applyMedia({ max: "480" }, flattenStyle([h[6], w[6]])),
]);

export const footer = style([position["absolute"], bottom[0], w["1/1"]]);
