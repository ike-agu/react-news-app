import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaveButton } from '../FaveButton';


export const Headlines = () => {

  const navigateTo = useNavigate()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        let {data} = await axios.get('https://futureproof-news.herokuapp.com/articles');
        setArticles(data);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchHeadlines()

  }, [])

  return(
    <ul>
    {
        articles.map( art => (
          <li key={art.id} onClick={() => navigateTo(art.id.toString())}>
            <FaveButton/> <strong role="heading" aria-label="headline">{art.headline}</strong> {art.snippet}

          </li>
        ))
    }



    </ul>


  )
}
