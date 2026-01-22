import { COLOR } from "../constants/color";
import { styleMapFromData } from "../libs/vanillaExtract";

export const fill = styleMapFromData(COLOR, (value) => ({
  fill: value,
}));
