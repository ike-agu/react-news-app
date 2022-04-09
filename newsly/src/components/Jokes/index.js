import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Jokes = ({close}) => {
  const [ joke, setJoke ] = useState();

  useEffect(() => {
      const tellMeAJoke = async () => {

        try {
          let opts = {headers:{'Accept': 'application/json'}}
          let {data} = await axios.get('https://icanhazdadjoke.com/', opts)
          setJoke(data.joke)
        } catch (error) {
          console.warn(error);
          setJoke('What is worst than  a bad joke? No jokes...')

        }
      }
      tellMeAJoke()
      const jokeIntervals = setInterval(tellMeAJoke, 8000)
      return () => clearInterval(jokeIntervals)
  }, [])

  return (
        <>
        <span onClick={close} style={{cursor: "pointer"}}>X</span>
        { joke ?
            <>
            <p>{joke}</p>
            </>
        : <h2>Jokes are on their way!</h2> }
        </>
    )

}
