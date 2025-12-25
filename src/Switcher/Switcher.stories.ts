import type {Meta, StoryObj} from "@storybook/react-vite";

import {Switcher} from "./Switcher";

const meta = {
    title: "Components/Switcher",
    component: Switcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        checked: true,
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
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // variant: "primary",
        // size: "small",
    },
};
