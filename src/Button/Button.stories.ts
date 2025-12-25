import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Click me",
    big: false,
    className: "",
  },
  argTypes: {
    className: {
      control: "text",
    },
    // variant: {
    //   options: ["primary", "secondary"],
    //   control: { type: "radio" },
    // },
    // size: {
    //   options: ["medium", "small"],
    //   control: { type: "radio" },
    // },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: "primary",
    // size: "small",
  },
};
