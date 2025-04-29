import process from "process";

type Keys =
  | "ENVIRONMENT"
  | "APP_URL"
  | "OG_IMAGE_SERVER_URL"
  | "NOTION_SECRET_KEY"
  | "NOTION_DATABASE_ID";

export const useEnv = () => {
  const env = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    APP_URL: process.env.APP_URL,
    OG_IMAGE_SERVER_URL: process.env.OG_IMAGE_SERVER_URL,
    NOTION_SECRET_KEY: process.env.NOTION_SECRET_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<Keys, string>;
};
