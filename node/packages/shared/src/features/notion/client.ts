import { Client } from "@notionhq/client";

/**
 * Create a Notion client with the provided API key
 */
export const createNotionClient = (apiKey: string): Client => {
  return new Client({ auth: apiKey });
};
