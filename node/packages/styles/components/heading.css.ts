import { styleVariants } from "@vanilla-extract/css";

import {
  applyMedia,
  flattenStyle,
  styleMap,
  styleRule,
} from "../libs/vanillaExtract";
import {
  fontColor,
  textAlign,
  m,
  p,
  fontSize,
  textDecoration,
  fontWeight,
} from "../styles";

const headingBaseRule = styleRule(
  flattenStyle([fontColor["mono.900"], textAlign["left"], m[0], p[0]]),
);

export const headingRule = styleMap({
  1: flattenStyle([
    headingBaseRule,
    fontSize[12],
    applyMedia({ max: "768" }, flattenStyle([fontSize[8]])),
  ]),
  2: flattenStyle([
    headingBaseRule,
    fontSize[8],
    applyMedia({ max: "768" }, flattenStyle([fontSize[7]])),
  ]),
  3: flattenStyle([
    headingBaseRule,
    fontSize[7],
    applyMedia({ max: "768" }, flattenStyle([fontSize[6]])),
  ]),
  4: flattenStyle([
    headingBaseRule,
    fontSize[6],
    applyMedia({ max: "768" }, flattenStyle([fontSize[5]])),
  ]),
  5: flattenStyle([
    headingBaseRule,
    fontSize[5],
    applyMedia({ max: "768" }, flattenStyle([fontSize[4]])),
  ]),
  6: flattenStyle([
    headingBaseRule,
    fontSize[4],
    applyMedia(
      { max: "768" },
      flattenStyle([textDecoration["underline"], fontWeight["normal"]]),
    ),
  ]),
});

export const heading = styleVariants(headingRule);
