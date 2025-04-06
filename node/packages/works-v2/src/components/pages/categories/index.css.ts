import { style } from "@vanilla-extract/css";
import { flex, flexDirection, gap } from "portfolio-styles";

export const layout = style([flex, flexDirection["column"], gap[4]]);
