import { Meta, StoryObj } from "@storybook/react";

import { Table, Tbody, Td, Th, Thead, Tr } from "./table";

const meta: Meta<typeof Table> = {
  title: "table",
  component: Table,
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
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    theme: "light",
  },
  render: ({ theme }) => (
    <Table theme={theme}>
      <Thead theme={theme}>
        <Tr>
          <Th theme={theme}>Name</Th>
          <Th theme={theme}>Role</Th>
          <Th theme={theme}>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td theme={theme}>John Doe</Td>
          <Td theme={theme}>Software Engineer</Td>
          <Td theme={theme}>john.doe@example.com</Td>
        </Tr>
        <Tr>
          <Td theme={theme}>Jane Smith</Td>
          <Td theme={theme}>Product Manager</Td>
          <Td theme={theme}>jane.smith@example.com</Td>
        </Tr>
        <Tr>
          <Td theme={theme}>Mike Johnson</Td>
          <Td theme={theme}>Designer</Td>
          <Td theme={theme}>mike.johnson@example.com</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
  },
  render: ({ theme }) => (
    <Table theme={theme}>
      <Thead theme={theme}>
        <Tr>
          <Th theme={theme}>Name</Th>
          <Th theme={theme}>Role</Th>
          <Th theme={theme}>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td theme={theme}>John Doe</Td>
          <Td theme={theme}>Software Engineer</Td>
          <Td theme={theme}>john.doe@example.com</Td>
        </Tr>
        <Tr>
          <Td theme={theme}>Jane Smith</Td>
          <Td theme={theme}>Product Manager</Td>
          <Td theme={theme}>jane.smith@example.com</Td>
        </Tr>
        <Tr>
          <Td theme={theme}>Mike Johnson</Td>
          <Td theme={theme}>Designer</Td>
          <Td theme={theme}>mike.johnson@example.com</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
};

export const LargeDataset: Story = {
  args: {
    theme: "light",
  },
  render: ({ theme }) => (
    <Table theme={theme}>
      <Thead theme={theme}>
        <Tr>
          <Th theme={theme}>ID</Th>
          <Th theme={theme}>Product</Th>
          <Th theme={theme}>Category</Th>
          <Th theme={theme}>Price</Th>
          <Th theme={theme}>Stock</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.from({ length: 10 }, (_, i) => (
          <Tr key={i}>
            <Td theme={theme}>{i + 1}</Td>
            <Td theme={theme}>Product {i + 1}</Td>
            <Td theme={theme}>Category {(i % 3) + 1}</Td>
            <Td theme={theme}>${(Math.random() * 100).toFixed(2)}</Td>
            <Td theme={theme}>{Math.floor(Math.random() * 100)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};

export const MinimalTable: Story = {
  args: {
    theme: "light",
  },
  render: ({ theme }) => (
    <Table theme={theme}>
      <Thead theme={theme}>
        <Tr>
          <Th theme={theme}>Column 1</Th>
          <Th theme={theme}>Column 2</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td theme={theme}>Data 1</Td>
          <Td theme={theme}>Data 2</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
};
