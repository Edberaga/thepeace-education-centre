import React, {useEffect, useState} from "react";
import {db} from '../../config/firebase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import './Articles.css'
import { FaHeart } from "react-icons/fa";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  },[]);
  return (
  <>
    <div className="container-section-full">
        {
            articles.length === 0 ? (
                <h1>No Articles found!</h1>
            ):(
                articles.map(({id, title, content, image, createAt}) => (
                  <div className="news-card" key={id}>
                    <div className="news-image" style={{backgroundImage: `url(${image})`} }>
                    </div>
                    <div className="news-word">
                        <p className="news-date">{createAt.toDate().toDateString()}</p>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                    <div className="news-media">
                        <p className="news-comment">
                            <span>0</span> comments
                        </p>
                        <p className="news-like">
                            <FaHeart/> <span>0</span>
                        </p>
                    </div>
                  </div>
                ))
            )
        }
    </div>
  </>
  )
}