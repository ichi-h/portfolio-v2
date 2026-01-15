import { LinkCard } from "portfolio-ui";
import { renderToString } from "react-dom/server";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { ReactElement } from "react";

type Template =
  | {
      type: "text";
      style: string[];
      text: string;
    }
  | {
      type: "youtube";
      id: string;
    }
  | {
      type: "linkCard";
      href: string;
      title: string;
      description: string;
      thumbnailUrl?: string;
    };

export const parseMd2Html = async (
  markdown: string,
  theme?: "light" | "dark",
) => {
  const mdToHtml = async (md: string) =>
    (
      await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(md)
    ).toString();
  const docs = (await mdToHtml(markdown))
    .replace(
      /<pre><code class="language-mermaid">(.*?)<\/code><\/pre>/gs,
      '<pre class="mermaid">$1</pre>',
    )
    .replace(/~~(.+?)~~/g, "<s>$1</s>");

  const templateToHtml = (template: Template) => {
    if (template.type === "text") {
      const style = template.style.map((s) => `text-${s}`).join(" ");
      if (
        style.includes("center") ||
        style.includes("right") ||
        style.includes("left")
      ) {
        return `<p class="${style}">${template.text}</p>`;
      }
      return `<span class="${style}">${template.text}</span>`;
    }
    if (template.type === "youtube") {
      return `<div class="text-center"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${template.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe></div>`;
    }
    if (template.type === "linkCard") {
      return renderToString(
        LinkCard({
          href: template.href,
          title: template.title,
          description: template.description,
          thumbnailUrl: template.thumbnailUrl,
          theme,
        }) as ReactElement,
      );
    }
    return "";
  };

  return docs
    .replace(/<p>{{%([\s\S]*?)%}}<\/p>/g, (value) => {
      const replaced = value
        .replace(/<p>/, "")
        .replace(/<\/p>/, "")
        .replace(/{{%([\s\S]*?)%}}/g, "{$1}")
        .replace(
          /thumbnailUrl\": \"<a href=.*?>(.*?)<\/a>/g,
          'thumbnailUrl": "$1',
        )
        .replace(/href\": \"<a href=.*?>(.*?)<\/a>/g, 'href": "$1')
        .replace(/url\": \"<a href=.*?>(.*?)<\/a>/g, 'url": "$1');

      try {
        const template = JSON.parse(replaced) as Template;
        return templateToHtml(template);
      } catch {
        throw new Error(`Failed to parse template: ${replaced}`);
      }
    })
    .replace(/{{%([\s\S]*?)%}}/g, (value) => {
      const template = JSON.parse(
        value.replace(/{{%([\s\S]*?)%}}/g, "{$1}"),
      ) as Template;
      return templateToHtml(template);
    });
};
