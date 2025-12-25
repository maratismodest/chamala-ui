import type {Meta, StoryObj} from "@storybook/react-vite";

import {Input} from "./Input";

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        placeholder: "Text me",
        className: "",
        label: "Label",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // variant: "primary",
        // size: "small",
    },
};
