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
  borderL,
  borderY,
  borderR,
  borderColor,
  borderStyle,
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
} from "portfolio-styles";
import {
  buttonLgSizeProps,
  buttonMdSizeProps,
  buttonXlSizeProps,
} from "portfolio-styles/components/button.css";

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
  w["svw"],
  h["svh"],
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
  gap[12],
  w["1/1"],
  h["vh"],
  opacity[0],
  applyMedia({ max: "1280" }, flattenStyle([gap[6]])),
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
  animationName(fadeIn),
  animationDuration["500"],
  animationTimingFunction["easeInOut"],
  animationFillMode["forwards"],
  animationDelay["500"],
]);

export const me = style([
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[4],
]);

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
  fontSize[8],
  applyMedia({ max: "768" }, flattenStyle([fontSize[6], lineHeight[4]])),
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

export const enterButton = style([
  flattenStyle(buttonXlSizeProps),
  applyMedia({ max: "768" }, flattenStyle(buttonLgSizeProps)),
  applyMedia({ max: "375" }, flattenStyle(buttonMdSizeProps)),
]);

export const footer = style([position["absolute"], bottom[0], w["1/1"]]);
