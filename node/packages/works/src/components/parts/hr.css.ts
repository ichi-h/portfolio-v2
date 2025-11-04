import { style } from "@vanilla-extract/css";
import {
  borderB,
  borderColor,
  borderL,
  borderR,
  borderStyle,
  borderT,
  my,
  w,
} from "portfolio-styles";

export const hr = style([
  {
    display: "block",
  },
  borderL[0],
  borderT[1],
  borderB[0],
  borderR[0],
  my[3],
  borderColor["mono.300"],
  borderStyle["solid"],
  w["1/1"],
]);
