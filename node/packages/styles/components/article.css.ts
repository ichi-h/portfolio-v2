import { style, globalStyle, styleVariants } from "@vanilla-extract/css";

import { applyMedia, flattenStyle } from "../libs/vanillaExtract";
import {
  flex,
  flexDirection,
  gap,
  w,
  h,
  m,
  ml,
  mr,
  my,
  bg,
  borderColor,
  borderStyle,
  border,
  borderL,
  p,
  pl,
  dropShadow,
  textAlign,
  fontColor,
  fontWeight,
  textDecoration,
  fontSize,
  maxW,
  borderRadius,
  mt,
  lineHeight,
  flexWrap,
} from "../styles";

import { headingRule } from "./heading.css";
import { defaultFontColor, linkHoverRule, linkRule } from "./link.css";
import { paragraphRule } from "./paragraph.css";
import {
  tableRule,
  thRule,
  tdRule,
  theadThRule,
  thTdBorderRule,
  theadBackgroundRule,
} from "./table.css";

export const article = style([
  flex,
  flexDirection["column"],
  gap[4],
  w["1/1"],
  fontSize[4],
]);

export const articleVariant = styleVariants({
  light: flattenStyle([fontColor["mono.900"]]),
  dark: flattenStyle([fontColor["mono.50"]]),
});

globalStyle(`${article} *`, m[0]);

globalStyle(`${article} p`, flattenStyle([paragraphRule, lineHeight["7"]]));

globalStyle(`${article} ul, ${article} ol`, flattenStyle([pl[6], m[0]]));

globalStyle(`${article} h1`, headingRule[1]);
globalStyle(`${article} h2`, flattenStyle([headingRule[2], mt[2]]));
globalStyle(`${article} h3`, flattenStyle([headingRule[3], mt[2]]));
globalStyle(`${article} h4`, flattenStyle([headingRule[4], mt[2]]));
globalStyle(`${article} h5`, flattenStyle([headingRule[5], mt[2]]));
globalStyle(`${article} h6`, flattenStyle([headingRule[6], mt[2]]));

globalStyle(
  `${article} img`,
  flattenStyle([
    ml["auto"],
    mr["auto"],
    my[0],
    w["1/1"],
    maxW[192],
    bg["mono.100"],
    {
      display: "block",
    },
  ]),
);

globalStyle(
  `${article} .gallery`,
  flattenStyle([flex, flexWrap["wrap"], gap[1]]),
);

globalStyle(
  `${article} .gallery-item`,
  flattenStyle([
    w["1/1"],
    {
      maxWidth: "calc(100% / 2 - 8px)",
      boxSizing: "border-box",
    },
    applyMedia(
      { max: "768" },
      flattenStyle([
        {
          maxWidth: "calc(100% - 8px)",
        },
      ]),
    ),
  ]),
);

globalStyle(
  `${article} .gallery-empty`,
  flattenStyle([
    w["1/1"],
    bg["mono.200"],
    {
      aspectRatio: "3 / 2",
      maxWidth: "calc(100% / 2 - 8px)",
      boxSizing: "border-box",
    },
    applyMedia({ max: "768" }, flattenStyle([w["0"], h["0"]])),
  ]),
);

globalStyle(
  `${article} a`,
  flattenStyle([linkRule, fontColor[defaultFontColor]]),
);
globalStyle(`${article} a:hover`, linkHoverRule);

globalStyle(
  `${article} blockquote`,
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
    dropShadow["md"],
  ]),
);

globalStyle(
  `${articleVariant["light"]} blockquote`,
  flattenStyle([bg["mono.50"], borderColor["mono.200"]]),
);

globalStyle(
  `${articleVariant["dark"]} blockquote`,
  flattenStyle([bg["mono.700"], borderColor["mono.400"]]),
);

globalStyle(
  `${article} p code`,
  flattenStyle([
    border[1],
    borderColor["mono.200"],
    borderStyle["solid"],
    fontColor["red.500"],
    borderRadius[1],
    p[1],
  ]),
);

globalStyle(`${article} pre code`, flattenStyle([borderRadius[1]]));

globalStyle(`${article} .text-center`, textAlign["center"]);
globalStyle(`${article} .text-right`, textAlign["right"]);
globalStyle(`${article} .text-left`, textAlign["left"]);
globalStyle(`${article} .text-blue`, fontColor["blue.500"]);
globalStyle(`${article} .text-red`, fontColor["red.500"]);
globalStyle(`${article} .text-gray`, fontColor["mono.400"]);
globalStyle(`${article} .text-bold`, fontWeight["bold"]);
globalStyle(`${article} .text-underline`, textDecoration["underline"]);
globalStyle(`${article} .text-3`, fontSize[3]);
globalStyle(`${article} .text-4`, fontSize[4]);
globalStyle(`${article} .text-5`, fontSize[5]);
globalStyle(`${article} .text-6`, fontSize[6]);
globalStyle(`${article} .text-7`, fontSize[7]);
globalStyle(`${article} .text-8`, fontSize[8]);
globalStyle(`${article} .text-12`, fontSize[12]);
globalStyle(`${article} .text-16`, fontSize[16]);
globalStyle(`${article} .text-32`, fontSize[32]);

globalStyle(
  `${article} iframe[src*="youtube.com"]`,
  flattenStyle([
    {
      aspectRatio: "16 / 9",
    },
    maxW[192],
    ml["auto"],
    mr["auto"],
    my[0],
  ]),
);

// Table styles
globalStyle(`${article} table`, flattenStyle([w["fit"], tableRule]));

globalStyle(`${article} th`, thRule);

globalStyle(`${article} td`, tdRule);

globalStyle(`${article} thead th`, theadThRule);

globalStyle(
  `${articleVariant["light"]} th, ${articleVariant["light"]} td`,
  thTdBorderRule.light,
);

globalStyle(
  `${articleVariant["dark"]} th, ${articleVariant["dark"]} td`,
  thTdBorderRule.dark,
);

globalStyle(`${articleVariant["light"]} thead`, theadBackgroundRule.light);

globalStyle(`${articleVariant["dark"]} thead`, theadBackgroundRule.dark);
