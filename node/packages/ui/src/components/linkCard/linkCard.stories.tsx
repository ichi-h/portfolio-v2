import { Meta, StoryObj } from "@storybook/react";

import { LinkCard } from "./linkCard";

const meta: Meta<typeof LinkCard> = {
  title: "link-card",
  component: LinkCard,
  argTypes: {
    theme: {
      control: {
        type: "select",
      },
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  args: {
    href: "https://github.com/ichi-h/portfolio-v2",
    title: "ichi-h/portfolio-v2",
    description:
      "Personal portfolio website built with Astro, React, and TypeScript. Features a modern design with dark mode support and responsive layout.",
    thumbnailUrl: "https://opengraph.githubassets.com/1/ichi-h/portfolio-v2",
    theme: "light",
  },
  render: ({ theme, ...args }) => <LinkCard {...args} theme={theme} />,
};

export const DarkTheme: Story = {
  args: {
    href: "https://github.com/ichi-h/portfolio-v2",
    title: "ichi-h/portfolio-v2",
    description:
      "Personal portfolio website built with Astro, React, and TypeScript. Features a modern design with dark mode support and responsive layout.",
    thumbnailUrl: "https://opengraph.githubassets.com/1/ichi-h/portfolio-v2",
    theme: "dark",
  },
  render: ({ theme, ...args }) => <LinkCard {...args} theme={theme} />,
};

export const WithoutThumbnail: Story = {
  args: {
    href: "https://example.com",
    title: "Example Website",
    description: "This is an example link card without a thumbnail image.",
    theme: "light",
  },
  render: ({ theme, ...args }) => <LinkCard {...args} theme={theme} />,
};

export const LongContent: Story = {
  args: {
    href: "https://github.com",
    title:
      "This is a very long title that should be truncated with ellipsis after two lines to demonstrate the line clamp functionality",
    description:
      "This is a very long description that should also be truncated with ellipsis after two lines. The LinkCard component uses the lineClamp prop to limit the text to two lines, ensuring that the card maintains a consistent height regardless of the content length. This helps maintain a clean and organized layout.",
    thumbnailUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    theme: "light",
  },
  render: ({ theme, ...args }) => <LinkCard {...args} theme={theme} />,
};
