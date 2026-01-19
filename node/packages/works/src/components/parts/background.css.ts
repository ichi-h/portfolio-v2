import { style } from "@vanilla-extract/css";
import { minH, blur } from "portfolio-styles";

export const backgroundParentStyle = style([minH["vh"]]);

export const backgroundChildStyle = style([blur[8]]);
