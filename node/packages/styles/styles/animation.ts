import { flattenStyle, styleMap, styleRule } from "../libs/vanillaExtract";

export const animationName = (name: string) => {
  return flattenStyle([
    {
      animationName: name,
    },
  ]);
};

export const animationFillMode = styleMap({
  none: {
    animationFillMode: "none",
  },
  forwards: {
    animationFillMode: "forwards",
  },
  backwards: {
    animationFillMode: "backwards",
  },
  both: {
    animationFillMode: "both",
  },
});

const createDurationStyleMap = (property: "transition" | "animation") => {
  const duration = `${property}Duration`;
  return styleMap({
    75: {
      [duration]: "75ms",
    },
    100: {
      [duration]: "100ms",
    },
    150: {
      [duration]: "150ms",
    },
    200: {
      [duration]: "200ms",
    },
    300: {
      [duration]: "300ms",
    },
    500: {
      [duration]: "500ms",
    },
    700: {
      [duration]: "700ms",
    },
    1000: {
      [duration]: "1000ms",
    },
    2000: {
      [duration]: "2000ms",
    },
    3000: {
      [duration]: "3000ms",
    },
    4000: {
      [duration]: "4000ms",
    },
    5000: {
      [duration]: "5000ms",
    },
  });
};
export const duration = createDurationStyleMap("transition");
export const animationDuration = createDurationStyleMap("animation");

const createTimingFunctionStyleMap = (property: "transition" | "animation") => {
  const timingFunction = `${property}TimingFunction`;
  return styleMap({
    easeIn: {
      [timingFunction]: "ease-in",
    },
    easeOut: {
      [timingFunction]: "ease-out",
    },
    easeInOut: {
      [timingFunction]: "ease-in-out",
    },
    linear: {
      [timingFunction]: "linear",
    },
    stepStart: {
      [timingFunction]: "step-start",
    },
    stepEnd: {
      [timingFunction]: "step-end",
    },
  });
};
export const timingFunction = createTimingFunctionStyleMap("transition");
export const animationTimingFunction =
  createTimingFunctionStyleMap("animation");

const createDelayStyleMap = (property: "transition" | "animation") => {
  const delay = `${property}Delay`;
  return styleMap({
    75: {
      [delay]: "75ms",
    },
    100: {
      [delay]: "100ms",
    },
    150: {
      [delay]: "150ms",
    },
    200: {
      [delay]: "200ms",
    },
    300: {
      [delay]: "300ms",
    },
    500: {
      [delay]: "500ms",
    },
    700: {
      [delay]: "700ms",
    },
    1000: {
      [delay]: "1000ms",
    },
  });
};
export const delay = createDelayStyleMap("transition");
export const animationDelay = createDelayStyleMap("animation");

export const animationLoop = styleRule({
  animationIterationCount: "infinite",
});

export const animateZoomOnHover = styleMap({
  sm: {
    ":hover": flattenStyle([
      duration[100],
      {
        scale: 1.01,
      },
    ]),
  },
  md: {
    ":hover": flattenStyle([
      duration[100],
      {
        scale: 1.02,
      },
    ]),
  },
  lg: {
    ":hover": flattenStyle([
      duration[100],
      {
        scale: 1.06,
      },
    ]),
  },
});
