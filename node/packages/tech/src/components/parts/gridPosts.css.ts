import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  borderRadius,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  fontSize,
  gap,
  grid,
  gridCols,
  gridRows,
  h,
  lineHeight,
  p,
  position,
  textDecoration,
  w,
} from "portfolio-styles";

export const cardGrid = style([
  grid,
  gridCols[3],
  gridRows[1],
  gap[6],
  applyMedia({ max: "1024" }, flattenStyle([gridCols[2]])),
  applyMedia({ max: "480" }, flattenStyle([gridCols[1]])),
]);

export const card = style([borderRadius[4], dropShadow["md"], h["1/1"]]);

export const cardLayout = style([flex, flexDirection["column"], gap[3], p[5]]);

export const cardLink = style([animateZoomOnHover["md"]]);

export const cardThumbnailBox = style([
  position["relative"],
  {
    aspectRatio: "1200 / 630",
  },
]);

export const cardThumbnail = style([
  w["1/1"],
  h["1/1"],
  {
    objectFit: "cover",
    aspectRatio: "1200 / 630",
  },
]);

export const cardTitle = style([
  fontSize[5],
  lineHeight[7],
  textDecoration["none"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4], lineHeight[4]])),
]);

export const cardDateAndCategory = style([flex, flexJustify["between"]]);

export const cardPublishedAt = style([flex, flexAlign["center"], gap[1]]);
