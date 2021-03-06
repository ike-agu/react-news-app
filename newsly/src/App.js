import React from 'react';
import { Layout } from './layout';
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import { Headlines, FeaturedArticle } from './components';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Pages.Home />} />
        <Route path="about" element={<Pages.About />} />
        <Route path="news" element={<Pages.News />} >
          <Route index element={<Headlines />}/>
          <Route path=":articleId" element={<FeaturedArticle />} />
        </Route>

      </Route>
    </Routes>

  );
}

export default App;
