import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  bg,
  borderRadius,
  bottom,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  flexWrap,
  fontSize,
  gap,
  grid,
  gridCols,
  gridRows,
  h,
  lineHeight,
  p,
  position,
  right,
  textDecoration,
  textWhiteSpace,
  w,
} from "portfolio-styles";

export const cardGrid = style([
  grid,
  gridCols[3],
  gridRows[1],
  gap[6],
  applyMedia({ max: "1024" }, flattenStyle([gridCols[2]])),
  applyMedia({ max: "576" }, flattenStyle([gridCols[1]])),
]);

// Dark theme variant for tech pages
export const cardDark = style([
  borderRadius[4],
  dropShadow["md"],
  h["1/1"],
  bg["mono.800"],
  {
    transition: "all 0.2s ease-in-out",
  },
]);

// Light theme variant for works pages
export const cardLight = style([
  borderRadius[4],
  dropShadow["md"],
  h["1/1"],
  bg["mono.50"],
]);

export const cardLayout = style([flex, flexDirection["column"], gap[3], p[5]]);

export const cardLink = style([animateZoomOnHover["md"]]);

export const cardThumbnailBox = style([
  position["relative"],
  {
    aspectRatio: "1200 / 630",
  },
]);

export const cardThumbnailIcon = style([
  position["absolute"],
  bottom[1],
  right[2],
]);

export const cardThumbnail = style([
  w["1/1"],
  h["1/1"],
  {
    objectFit: "cover",
    aspectRatio: "1200 / 630",
  },
]);

export const cardTitleDark = style([
  fontSize[5],
  lineHeight[7],
  textDecoration["none"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4], lineHeight[4]])),
]);

export const cardTitleLight = style([
  fontSize[5],
  lineHeight[7],
  textDecoration["none"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4], lineHeight[4]])),
]);

export const cardDateAndCategory = style([
  flex,
  flexJustify["between"],
  gap[1],
]);

export const cardPublishedAt = style([
  flex,
  flexAlign["center"],
  gap[1],
  flexWrap["nowrap"],
  textWhiteSpace["nowrap"],
]);
