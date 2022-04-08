import React from 'react';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { FeaturedArticle } from '.';


export default {
    title: 'Components/Featured Article',
    component: FeaturedArticle,
    decorators: [(Story) => (
        <MemoryRouter initialEntries={["/news/2"]} >
            <Routes>
                <Route path="/news/:articleId" element={<Story />}/>
            </Routes>
        </MemoryRouter>
    )]
}

const Template = args => <FeaturedArticle {...args} />

export const Default = Template.bind({});
