import { renderToString } from "react-dom/server";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";

import { LinkCard } from "../parts/linkCard";

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
    type: "soundcloud";
    trackId: string;
    href: string;
    title: string;
    user?: string;
  }
  | {
    type: "linkCard";
    href: string;
    title: string;
    description: string;
    thumbnailUrl?: string;
  }
  | {
    type: "gallery";
    images: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };

export const parseMd2Html = async (markdown: string) => {
  const mdToHtml = async (md: string) =>
    (
      await unified()
        .use(remarkParse)
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
    if (template.type === "soundcloud") {
      const user =
        template.user ??
        template.href.replace("https://soundcloud.com/", "").split("/")[0];
      return `<div class="text-center"><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A${template.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/${user}" title="ichi-h" target="_blank" style="color: #cccccc; text-decoration: none;">${user}</a> · <a href="${template.href}" title="${template.title}" target="_blank" style="color: #cccccc; text-decoration: none;">${template.title}</a></div></div>`;
    }
    if (template.type === "linkCard") {
      return renderToString(
        LinkCard({
          href: template.href,
          title: template.title,
          description: template.description,
          thumbnailUrl: template.thumbnailUrl,
        }) as ReactElement,
      );
    }
    if (template.type === "gallery") {
      const images = template.images
        .map(
          (image) =>
            `<a class="gallery-item" href="${image.url}">
              <img src="${image.url}" alt="${image.alt}" style="aspect-ratio: 3 / 2; object-fit: cover;" />
            </a>`,
        );
      if (images.length % 2 === 1) {
        images.push(`<div class="gallery-empty"></div>`);
      }
      return `<div class="gallery" id="gallery">${images.join("")}</div>`;
    }
    return "";
  };

  return docs
    .replace(/<p>{{%([\s\S]*?)%}}<\/p>/g, (value) => {
      const template = JSON.parse(
        value
          .replace(/<p>/, "")
          .replace(/<\/p>/, "")
          .replace(/{{%([\s\S]*?)%}}/g, "{$1}"),
      ) as Template;
      return templateToHtml(template);
    })
    .replace(/{{%([\s\S]*?)%}}/g, (value) => {
      const template = JSON.parse(
        value.replace(/{{%([\s\S]*?)%}}/g, "{$1}"),
      ) as Template;
      return templateToHtml(template);
    });
};
