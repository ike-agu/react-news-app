import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '.';

export default {
    title: 'Layout/Header',
    component: Header,
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
}

export const Default = () => <Header />;
