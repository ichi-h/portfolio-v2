import { style, styleVariants } from "@vanilla-extract/css";

import { flattenStyle } from "../libs/vanillaExtract";
import {
  fontColor,
  border,
  borderStyle,
  borderColor,
  py,
  fontSize,
  px,
  borderRadius,
  bg,
} from "../styles";

export const buttonBase = style([
  {
    background: "none",
    cursor: "pointer",
  },
  border["1"],
  borderStyle["solid"],
  py["1"],
]);

export const buttonVariant = styleVariants({
  black: [
    {
      ":hover": flattenStyle([
        fontColor["mono.300"],
        borderColor["mono.300"],
      ]),
      ":active": flattenStyle([
        fontColor["mono.500"],
        borderColor["mono.500"],
      ]),
    },
    fontColor["mono.900"],
    borderColor["mono.900"],
  ],
  white: [
    {
      ":hover": flattenStyle([
        fontColor["mono.300"],
        borderColor["mono.300"],
      ]),
      ":active": flattenStyle([
        fontColor["mono.600"],
        borderColor["mono.600"],
      ]),
    },
    fontColor["mono.50"],
    borderColor["mono.50"],
  ],
});

export const buttonSize = styleVariants({
  xs: [fontSize[3], px[2]],
  sm: [fontSize[4], px[2]],
  md: [fontSize[5], px[3]],
  lg: [fontSize[6], px[4]],
  xl: [fontSize[7], px[5]],
});

export const buttonRound = styleVariants({
  default: [borderRadius[2]],
  rounded: [borderRadius["full"]],
});
