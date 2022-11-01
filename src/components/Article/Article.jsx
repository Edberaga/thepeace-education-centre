import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams, Link } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import './Article.css';
import LikeArticle from './LikeArticle';

export default function Article() {
    const {id} = useParams();
    const {user} = useAuthState(auth);
    const [article, setArticle] = useState(null);

    useEffect( () => {
        const docRef = doc(db, "Articles", id);
        onSnapshot(docRef, (snapshot) => {
            setArticle({...snapshot.data(), id: snapshot.id});
        });
    })

  return (
    <>
    <div className="container" style={{marginTop: '5vh'}}>
    {
        article && (
        <div className="col">
            <div className='blog-img'>
                <img 
                    src={article.image} 
                    alt={article.title}
                    className="blog-image"
                />
            </div>
            <div className="blog-heading">
                <h1>{article.title}</h1>
                <p>{article.createAt.toDate().toDateString()}</p>
            </div>
            <div className="blog-content">
                <p>{article.content}</p>
            </div>
            <div className="row">
                <h2>Comments</h2>
                {user 
                ? <LikeArticle id={id} likes={article.likes} className="news-like-icon"/> 
                : ''
                }
            </div>
            
        </div>
    )}
    </div>
    </>
  )  
}
