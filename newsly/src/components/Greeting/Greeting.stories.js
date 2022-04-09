import React from 'react';
import { Greeting } from '.';

export default {
    title: 'Components/Greeting',
    component: Greeting
}

const Template = args => <Greeting {...args} />

export const Default = Template.bind({});
