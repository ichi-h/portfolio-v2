type Keys = "APP_URL" | "OG_IMAGE_SERVER_URL";

export const useEnv = () => {
  const env = {
    APP_URL: import.meta.env.APP_URL,
    OG_IMAGE_SERVER_URL: import.meta.env.OG_IMAGE_SERVER_URL,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<Keys, string>;
};
