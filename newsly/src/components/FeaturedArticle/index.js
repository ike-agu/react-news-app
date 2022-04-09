import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const FeaturedArticle = () => {
  const {articleId} = useParams();
  const [article, SetArticle] = useState();
  const [statusMessage, setStatusMessage] = useState('Page loading...');

  useEffect(() => {
    const fetchArticle = async () => {
      setStatusMessage("PageLoading...")
      try {
        let  {data} = await axios.get(`https://futureproof-news.herokuapp.com/articles/${articleId}`);
        SetArticle(data);
        setStatusMessage('');
      } catch (error) {
        console.log(error);
        setStatusMessage(`sorry there has been an issue! ${error.message}`)

      }
    }

    fetchArticle()
  }, [articleId])


  return (
    <>
    <h3>{statusMessage ? statusMessage : article.headline}</h3>
    <p>{!statusMessage && article.body}</p>
    </>
  )
}
