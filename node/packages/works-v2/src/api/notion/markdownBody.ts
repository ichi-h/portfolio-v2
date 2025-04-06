import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { useEnv } from "../../utils/env";

export const getMarkdownBody = async (pageId: string) => {
  const { NOTION_SECRET_KEY } = useEnv();
  const notion = new Client({ auth: `${NOTION_SECRET_KEY}` });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m
    .toMarkdownString(
      mdBlocks.map((b) => {
        if (b.type === "quote") {
          return {
            ...b,
            parent: `${b.parent}\n>\n${b.children
              .map((c) => {
                if (c.type === "bulleted_list_item") {
                  return `> ${c.parent}  `;
                }
                return `> ${c.parent}  \n>`;
              })
              .join("\n")}`,
            children: [],
          };
        }
        return b;
      }),
    )
    .parent.replace(/```f#/g, "```fsharp")
    .replace(/((^> +- .+\n)+)(> +[^-]*)$/gm, "$1>\n$3")
    .replaceAll("	>", ">");
};
