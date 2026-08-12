import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  dropShadow,
  flattenStyle,
  flex,
  flexDirection,
  flexJustify,
  gap,
  h,
  mb,
  p,
  textAlign,
  w,
} from "portfolio-styles";

export const authorBox = style([
  flex,
  gap[6],
  p[2],
  applyMedia({ max: "480" }, flattenStyle([flexDirection["column"], gap[2]])),
]);

export const avatarBox = style([
  h["fit"],
  applyMedia({ max: "480" }, flattenStyle([textAlign["center"]])),
]);

export const profileBox = style([flex, flexDirection["column"], gap[2]]);

export const profileName = style([
  applyMedia({ max: "480" }, flattenStyle([textAlign["center"]])),
]);

export const avatar = style([
  dropShadow["soft"],
  w[24],
  h[24],
  animateZoomOnHover["md"],
]);

export const snsLinks = style([
  applyMedia({ max: "480" }, flattenStyle([flex, flexJustify["end"]])),
]);
