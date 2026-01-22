import { keyframes, style, globalStyle } from "@vanilla-extract/css";
import {
  w,
  h,
  position,
  top,
  left,
  opacity,
  visibility,
  bg,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationFillMode,
  animationDelay,
  flattenStyle,
  zIndex,
  maxW,
  py,
  px,
  applyMedia,
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  COLOR,
  COLOR_OPACITY,
  bottom,
  right,
  duration,
} from "portfolio-styles";

// Global fix for horizontal scrollbar
globalStyle("html, body", {
  maxWidth: "100vw",
});

// Enable smooth scrolling for anchor links
globalStyle("html", {
  scrollBehavior: "smooth",
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
  h["vh"],
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
  { maxWidth: "100vw" },
]);

export const contentBg = style([
  position["relative"],
  zIndex[10],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  w["1/1"],
  bg["mono.900"],
]);

export const content = style([
  maxW[256],
  py[4],
  px[8],
  applyMedia({ max: "768" }, flattenStyle([px[5]])),
  applyMedia({ max: "480" }, flattenStyle([px[4]])),
]);

export const footer = style([w["1/1"]]);

export const marginTop = style([
  position["relative"],
  zIndex[10],
  w["1/1"],
  h[1],
  {
    background: `linear-gradient(0deg, ${COLOR["mono.900"]} 0%, ${COLOR["mono.900"]}${COLOR_OPACITY["0"]} 100%);`,
  },
]);

export const scrollIcon = style([
  position["fixed"],
  bottom[6],
  right[6],
  duration[200],
  opacity[0],
  {
    pointerEvents: "none",
  },
]);
