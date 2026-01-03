import { validateEnv } from "portfolio-shared";

export const useEnv = () => {
  return validateEnv({
    ENVIRONMENT: import.meta.env.ENVIRONMENT,
    NOTION_SECRET_KEY: import.meta.env.NOTION_SECRET_KEY,
    NOTION_DATA_SOURCE_ID: import.meta.env.NOTION_DATA_SOURCE_ID,
    APP_URL: import.meta.env.APP_URL,
    OG_IMAGE_SERVER_URL: import.meta.env.OG_IMAGE_SERVER_URL,
  });
};
