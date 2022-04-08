import React from 'react';
import { Layout } from './layout';
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />



     
      </Route>
    </Routes>

  );
}

export default App;
