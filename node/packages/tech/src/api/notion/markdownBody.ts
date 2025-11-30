import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { useEnv } from "../../utils/env";

const mockedBody = `## Introduction

This is a sample technical article about building modern web applications.

## Getting Started

\`\`\`typescript
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
\`\`\`

## Best Practices

- Use TypeScript for type safety
- Write unit tests for critical functionality
- Follow consistent code style

### Code Organization

Organize your code into logical modules:

1. **api/** - API related code
2. **components/** - UI components
3. **utils/** - Utility functions

## Conclusion

Building maintainable applications requires good architecture and consistent practices.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
`;

export const getMarkdownBody = async (pageId: string) => {
  const { ENVIRONMENT, NOTION_SECRET_KEY } = useEnv();

  if (ENVIRONMENT !== "production") {
    return mockedBody;
  }

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
    .replaceAll("\t>", ">");
};
