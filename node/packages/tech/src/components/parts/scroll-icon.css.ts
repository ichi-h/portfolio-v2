import { style } from "@vanilla-extract/css";
import {
  flattenStyle,
  w,
  h,
  bg,
  border,
  borderColor,
  borderStyle,
  borderRadius,
  fill,
  duration,
  dropShadow,
} from "portfolio-styles";

export const arrowIcon = style([
  w[8],
  h[8],
  bg["mono.900"],
  border[2],
  borderColor["mono.700"],
  borderStyle["solid"],
  borderRadius["full"],
  fill["mono.700"],
  dropShadow["hard"],
  duration[200],
  {
    ":hover": flattenStyle([borderColor["mono.400"], fill["mono.400"]]),
  },
]);
