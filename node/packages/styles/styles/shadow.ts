import { REM, COLOR, COLOR_OPACITY } from "../constants";
import { styleMap } from "../libs/vanillaExtract";

export const dropShadow = styleMap({
  soft: {
    boxShadow: `0 0 ${REM[2]} ${COLOR["pureBlack"] + COLOR_OPACITY["20"]}`,
  },
  hard: {
    boxShadow: `0 0 ${REM[2]} ${COLOR["pureBlack"] + COLOR_OPACITY["60"]}`,
  },
});
