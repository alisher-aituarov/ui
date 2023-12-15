import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Default: Story = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};
