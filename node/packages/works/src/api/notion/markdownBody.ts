import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { useEnv } from "../../utils/env";

const mockedBody = `## Photograph

{{%
  "type": "gallery",
  "images": [
    {
      "url": "https://picsum.photos/1280/720",
      "alt": "Sample Image 2",
      "width": 1280,
      "height": 720
    },
    {
      "url": "https://picsum.photos/1200/800",
      "alt": "Sample Image 1",
      "width": 1200,
      "height": 800
    },
    {
      "url": "https://picsum.photos/640/480",
      "alt": "Sample Image 4",
      "width": 640,
      "height": 480
    },
    {
      "url": "https://picsum.photos/512/512",
      "alt": "Sample Image 3",
      "width": 512,
      "height": 512
    }
  ]
%}}

## Heading 2

親譲りの無鉄砲で小供の時から損ばかりしている。
小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。
新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。
弱虫やーい。と囃したからである。
小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）

### Heading 3-1

Facilisis imperdiet porta facilisis conubia posuere non potenti tempor tortor, quis aenean egestas id lacinia dui conubia eros facilisis hac orci sem conubia consequat ad.

Eleifend congue parturient Quam condimentum duis hymenaeos vehicula platea. Ut, imperdiet ullamcorper tempor condimentum, iaculis. Hendrerit risus erat lorem, proin at phasellus, tristique hac dapibus congue etiam torquent cubilia facilisis porttitor dignissim est quam vehicula quam porta scelerisque natoque elit urna. Erat aenean integer. Eros interdum leo.

Iaculis nunc magnis lectus. Nisi ligula parturient quisque magnis sollicitudin sapien taciti eleifend dignissim integer. Hendrerit tincidunt lobortis diam varius ullamcorper facilisis. Interdum tempus magnis dictumst phasellus ultricies.

### Heading 3-2

Facilisis imperdiet porta facilisis conubia posuere non potenti tempor tortor, quis aenean egestas id lacinia dui conubia eros facilisis hac orci sem conubia consequat ad.

Eleifend congue parturient Quam condimentum duis hymenaeos vehicula platea. Ut, imperdiet ullamcorper tempor condimentum, iaculis. Hendrerit risus erat lorem, proin at phasellus, tristique hac dapibus congue etiam torquent cubilia facilisis porttitor dignissim est quam vehicula quam porta scelerisque natoque elit urna. Erat aenean integer. Eros interdum leo.

Iaculis nunc magnis lectus. Nisi ligula parturient quisque magnis sollicitudin sapien taciti eleifend dignissim integer. Hendrerit tincidunt lobortis diam varius ullamcorper facilisis. Interdum tempus magnis dictumst phasellus ultricies.

#### Heading 4

- list1
- list2
- list3
  - list3-1
  - list3-2
  - list3-3
-  list4

[google](http://www.google.com) is a search engine.

##### Heading 5

{{%
  "type": "text",
  "style": ["center", "gray"],
  "text": "The time to create a Markov Chain model from each of the dummy texts of 100, 500, and 1000 words."
%}}

![image](https://raw.githubusercontent.com/ichi-h/markov_rs/main/imgs/create_model.jpg)

## YouTube

{{% "type": "youtube", "id": "CvglW3KNSsQ" %}}

## Quote

> This is a quote.
> This is a quote.
> This is a quote.

## Code

\`\`\`python
def main():
    print("Hello World!")
main()
\`\`\`

## Expand

{{% "type": "text", "style": ["bold"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "blue"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "blue", "3"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "red"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "red", "5"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "red", "8"], "text": "強調" %}}

{{% "type": "text", "style": ["bold", "red", "12"], "text": "強調" %}}
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
    .replaceAll("	>", ">");
};
