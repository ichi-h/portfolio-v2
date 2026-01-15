import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import {
  w,
  h,
  applyMedia,
  flattenStyle,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationFillMode,
  animationLoop,
} from "portfolio-styles";

export const pulseAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.2)" },
  "100%": { transform: "scale(1)" },
});

export const downIcon = style([
  animationName(pulseAnimation),
  animationDuration["2000"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  animationLoop,
]);

export const downIconVariant = styleVariants({
  medium: flattenStyle([
    h[16],
    w[16],
    applyMedia({ max: "375" }, flattenStyle([h[12], w[12]])),
  ]),
  small: flattenStyle([
    h[8],
    w[8],
    applyMedia({ max: "375" }, flattenStyle([h[6], w[6]])),
  ]),
});
