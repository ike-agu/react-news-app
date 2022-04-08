import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const FeaturedArticle = () => {
    const { articleId } = useParams();
    const [ article, setArticle ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');

    useEffect(() => {
        const fetchArticle = async () => {
            setStatusMessage('Loading')
            try {
                let { data } = await axios.get(`https://futureproof-news.herokuapp.com/articles/${articleId}`);
                setArticle(data);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchArticle()
    }, [articleId])

    return (
        <article aria-label="featured article" id="feature">
            <>
            <h3>{ statusMessage ? statusMessage : article.headline }</h3>
            <p>
                {!statusMessage && article.body }
            </p>
            </>
        </article>
    )
}
