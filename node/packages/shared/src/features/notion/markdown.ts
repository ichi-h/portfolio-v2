import { NotionToMarkdown } from "notion-to-md";

import type { Client } from "@notionhq/client";

/**
 * Convert Notion page to Markdown
 */
export const pageToMarkdown = async (
  client: Client,
  pageId: string,
): Promise<string> => {
  const n2m = new NotionToMarkdown({ notionClient: client });

  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m
    .toMarkdownString(
      mdBlocks.map((b) => {
        if (b.type === "quote") {
          return {
            ...b,
            parent: `${b.parent}\\n>\\n${b.children
              .map((c) => {
                if (c.type === "bulleted_list_item") {
                  return `> ${c.parent}  `;
                }
                return `> ${c.parent}  \\n>`;
              })
              .join("\\n")}`,
            children: [],
          };
        }
        return b;
      }),
    )
    .parent.replace(/```f#/g, "```fsharp")
    .replace(/((^> +- .+\\n)+)(> +[^-]*)$/gm, "$1>\\n$3")
    .replaceAll("\t>", ">");
};
