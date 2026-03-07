import { validateEnv } from "portfolio-shared";

export const useEnv = () => {
  return validateEnv({
    ENVIRONMENT: process.env.ENVIRONMENT,
    NOTION_SECRET_KEY: process.env.NOTION_SECRET_KEY,
    NOTION_DATA_SOURCE_ID: process.env.NOTION_DATA_SOURCE_ID,
  });
};
