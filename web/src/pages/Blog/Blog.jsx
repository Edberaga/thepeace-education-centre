import React from "react";
import Articles from "../../components/Article/Articles";
import AddArticle from "../../components/Article/AddArticle";

import './Blog.css'

export const Blog = () => {

  return (
    <>
    <div>
      <div className="container-article">
        <Articles/>
      </div>
    </div>
    <div>
      <div>
        <AddArticle/>
      </div>
    </div>
    </>
  )
}
