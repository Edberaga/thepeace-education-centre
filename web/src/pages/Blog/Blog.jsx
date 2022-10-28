import React from "react";
import Articles from "../../components/Article/Articles";
import AddArticle from "../../components/Article/AddArticle";

export const Blog = () => {

  return (
    <>
    <div className="container-full">
        <div>
            <Articles/>
        </div>
        <div>
            <AddArticle/>
        </div>
    </div>
    </>
  )
}
