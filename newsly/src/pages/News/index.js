import React from 'react';
import { Outlet } from 'react-router-dom';
import { Greeting, ReaderCount } from '../../components';
import './style.css';

export const News = () =>{

  return(

  <div className="news-reader">
    <h1>Juicy Events</h1>

    <aside>
      <Greeting/>

      <ReaderCount />
    </aside>

     <section>
        <Outlet />
      </section>
  </div>

  )

}
