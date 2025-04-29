type Keys =
  | "ENVIRONMENT"
  | "APP_URL"
  | "OG_IMAGE_SERVER_URL"
  | "NOTION_SECRET_KEY"
  | "NOTION_DATABASE_ID";

export const useEnv = () => {
  const env = {
    ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
    APP_URL: import.meta.env.VITE_APP_URL,
    OG_IMAGE_SERVER_URL: import.meta.env.VITE_OG_IMAGE_SERVER_URL,
    NOTION_SECRET_KEY: import.meta.env.VITE_NOTION_SECRET_KEY,
    NOTION_DATABASE_ID: import.meta.env.VITE_NOTION_DATABASE_ID,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<Keys, string>;
};
