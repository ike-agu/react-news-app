import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Headlines } from '.';

export default {
    title: 'Components/Headlines',
    component: Headlines,
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
}

const Template = args => <Headlines {...args} />

export const Default = Template.bind({});
