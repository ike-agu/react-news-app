import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

export const News = () =>{

  return(

  <div className="news-reader">
    <h1>This is the section to render the news</h1>
    <h1>A Real State of Events</h1>

     <section>
        <Outlet />
      </section>
  </div>

  )

}
