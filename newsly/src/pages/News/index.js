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

      <img src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="newspapers"/>


    </aside>

     <section>
        <Outlet />
      </section>
  </div>

  )

}
