import { globalStyle, style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  gap,
  maxW,
  minH,
  mx,
  position,
  px,
  py,
  pb,
  bottom,
  left,
  fontColor,
  fontSize,
  flattenStyle,
  applyMedia,
  m,
  mt,
  ml,
  mr,
  my,
  pl,
  w,
  lineHeight,
  fontWeight,
  textDecoration,
  textAlign,
  borderStyle,
  border,
  borderL,
  borderColor,
  borderRadius,
  bg,
  p,
} from "portfolio-styles";

export const wrapper = style([position["relative"], minH["dvh"]]);

export const main = style([
  flex,
  flexDirection["column"],
  maxW[160],
  mx["auto"],
  px[8],
  py[16],
  pb[32],
  gap[8],
  applyMedia({ max: "768" }, flattenStyle([px[6], py[12], pb[24], gap[6]])),
  applyMedia({ max: "480" }, flattenStyle([px[4], py[8], pb[16], gap[4]])),
]);

export const backNav = style([position["fixed"], bottom[8], left[8]]);

export const backLink = style([
  flex,
  { opacity: 0.8, transition: "opacity 0.15s" },
  { selectors: { "&:hover": { opacity: 1 } } },
]);

export const title = style([
  textAlign["center"],
  fontSize[12],
  fontWeight["bold"],
]);

export const writtenAt = style([
  textAlign["right"],
  fontColor["mono.800"],
  fontSize[3],
]);

// Scoped styles for dangerouslySetInnerHTML content
export const fragment = style([
  flex,
  flexDirection["column"],
  gap[4],
  fontSize[4],
]);

globalStyle(`${fragment} *`, flattenStyle([m[0]]));

globalStyle(
  `${fragment} p`,
  flattenStyle([fontSize[4], lineHeight["7"], m[0]]),
);

globalStyle(
  `${fragment} h1`,
  flattenStyle([fontSize[8], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} h2`,
  flattenStyle([fontSize[7], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} h3`,
  flattenStyle([fontSize[6], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} h4`,
  flattenStyle([fontSize[5], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} h5`,
  flattenStyle([fontSize[4], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} h6`,
  flattenStyle([fontSize[4], fontWeight["bold"], mt[4]]),
);

globalStyle(
  `${fragment} a`,
  flattenStyle([
    textDecoration["none"],
    fontColor["blue.600"],
    { cursor: "pointer", wordBreak: "break-word" },
  ]),
);

globalStyle(`${fragment} a:hover`, flattenStyle([textDecoration["underline"]]));

globalStyle(`${fragment} ul, ${fragment} ol`, flattenStyle([pl[6], m[0]]));

globalStyle(`${fragment} li`, flattenStyle([lineHeight["7"]]));

globalStyle(
  `${fragment} img`,
  flattenStyle([
    ml["auto"],
    mr["auto"],
    my[0],
    w["1/1"],
    maxW[192],
    { display: "block" },
  ]),
);

globalStyle(
  `${fragment} blockquote`,
  flattenStyle([
    flex,
    flexDirection["column"],
    gap[2],
    borderStyle["solid"],
    border[0],
    borderL[8],
    borderRadius[1],
    p[3],
    m[0],
    bg["mono.200"],
    borderColor["mono.400"],
  ]),
);

globalStyle(
  `${fragment} p code`,
  flattenStyle([
    border[1],
    borderColor["mono.200"],
    borderStyle["solid"],
    fontColor["red.500"],
    borderRadius[1],
    p[1],
  ]),
);

globalStyle(`${fragment} pre code`, flattenStyle([borderRadius[1]]));
