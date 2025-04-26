import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "heading",
  component: Heading,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => (
    <>
      <Heading level="1">Heading level 1</Heading>
      <Heading level="2">Heading level 2</Heading>
      <Heading level="3">Heading level 3</Heading>
      <Heading level="4">Heading level 4</Heading>
      <Heading level="5">Heading level 5</Heading>
      <Heading level="6">Heading level 6</Heading>
    </>
  ),
};
