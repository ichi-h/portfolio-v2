import { style, styleVariants } from "@vanilla-extract/css";

import { flattenStyle, styleMap, styleRule } from "../libs/vanillaExtract";
import {
  bg,
  border,
  borderColor,
  borderStyle,
  fontColor,
  fontWeight,
  p,
  textAlign,
} from "../styles";

// Reusable style rules for article.css.ts
export const tableRule = styleRule(
  flattenStyle([{ borderCollapse: "collapse" }]),
);

export const thRule = styleRule(flattenStyle([p[2], textAlign["left"]]));

export const tdRule = styleRule(flattenStyle([p[2]]));

export const theadThRule = styleRule(flattenStyle([fontWeight["bold"]]));

export const thTdBorderRule = styleMap({
  light: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.400"],
  ]),
  dark: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.500"],
  ]),
});

export const theadBackgroundRule = styleMap({
  light: flattenStyle([bg["mono.200"]]),
  dark: flattenStyle([bg["mono.700"]]),
});

// Component styles
export const table = style(tableRule);

export const tableVariant = styleVariants({
  light: flattenStyle([bg["mono.50"], fontColor["mono.900"]]),
  dark: flattenStyle([bg["mono.800"], fontColor["mono.50"]]),
});

export const theadVariant = styleVariants({
  light: flattenStyle([bg["mono.200"]]),
  dark: flattenStyle([bg["mono.700"]]),
});

export const th = style(
  flattenStyle([p[2], textAlign["left"], fontWeight["bold"]]),
);

export const thVariant = styleVariants({
  light: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.400"],
  ]),
  dark: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.500"],
  ]),
});

export const td = style(flattenStyle([p[2]]));

export const tdVariant = styleVariants({
  light: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.400"],
  ]),
  dark: flattenStyle([
    border["1"],
    borderStyle["solid"],
    borderColor["mono.500"],
  ]),
});
