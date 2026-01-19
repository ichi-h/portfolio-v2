import { keyframes, style } from "@vanilla-extract/css";
import {
  flattenStyle,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationFillMode,
  animationLoop,
  opacity,
} from "portfolio-styles";

export const pulseAnimation = keyframes({
  "0%": flattenStyle([opacity["20"]]),
  "50%": flattenStyle([opacity["100"]]),
  "100%": flattenStyle([opacity["20"]]),
});

export const downIcon = style([
  animationName(pulseAnimation),
  animationDuration["3000"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  animationLoop,
  {
    cursor: "s-resize",
  },
]);
