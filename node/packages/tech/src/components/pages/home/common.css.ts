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
} from "portfolio-styles";
import { buttonXlSizeProps } from "portfolio-styles/components/button.css";

// Global fix for horizontal scrollbar
globalStyle("html, body", {
  overflowX: "hidden",
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

export const enterButton = style([flattenStyle(buttonXlSizeProps)]);

export const footer = style([w["1/1"]]);
