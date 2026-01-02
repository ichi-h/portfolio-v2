import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/heading.css";

import { Heading } from "./heading";

const options = {
  color: Object.keys(styles.fontColor) as Array<keyof typeof styles.fontColor>,
};

const meta: Meta<typeof Heading> = {
  title: "heading",
  component: Heading,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: options.color,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: ({ color }) => (
    <>
      <Heading level="1" color={color}>
        Heading level 1
      </Heading>
      <Heading level="2" color={color}>
        Heading level 2
      </Heading>
      <Heading level="3" color={color}>
        Heading level 3
      </Heading>
      <Heading level="4" color={color}>
        Heading level 4
      </Heading>
      <Heading level="5" color={color}>
        Heading level 5
      </Heading>
      <Heading level="6" color={color}>
        Heading level 6
      </Heading>
    </>
  ),
};
