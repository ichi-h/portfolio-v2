type Keys =
  | "ENVIRONMENT"
  | "APP_URL"
  | "OG_IMAGE_SERVER_URL"
  | "NOTION_SECRET_KEY"
  | "NOTION_DATABASE_ID";

export const useEnv = () => {
  const env = {
    ENVIRONMENT: import.meta.env.ENVIRONMENT,
    APP_URL: import.meta.env.APP_URL,
    OG_IMAGE_SERVER_URL: import.meta.env.OG_IMAGE_SERVER_URL,
    NOTION_SECRET_KEY: import.meta.env.NOTION_SECRET_KEY,
    NOTION_DATABASE_ID: import.meta.env.NOTION_DATABASE_ID,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<Keys, string>;
};
