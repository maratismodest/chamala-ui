import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from "../Input/Input";

export default {
    title: 'Example/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
    big: false,
    placeholder: 'TEXT',
    label: 'asfasfasf'
};

export const BigInput = Template.bind({});
BigInput.args = {
    big: true,
    placeholder: 'TEXT',
    label: 'asfasfasf'
};

