import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { Greeting, ReaderCount, Jokes } from '../../components';
import './style.css';

export const News = () =>{

  const [showJokes, setShowJokes] = useState(false)

  const toggleJokes = ()=> setShowJokes(previousState => !previousState)

  return(

  <div className="news-reader">
    <h1>Juicy Events</h1>

    <aside>
      <Greeting/>

      <ReaderCount />

      <article arial-label="jokes" id="fun" style={{border: "1px dashed red", margin: "10px"}}>
        {showJokes ? <Jokes close={toggleJokes} /> : <button onClick={toggleJokes}>Tell me some Jokes!</button>}
      </article>


    </aside>

     <section>
        <Outlet />
      </section>
  </div>

  )

}
