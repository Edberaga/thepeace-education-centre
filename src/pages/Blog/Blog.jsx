import React from "react";
import Articles from "../../components/Article/Articles";
import AddArticle from "../../components/Article/AddArticle";

import './Blog.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export const Blog = () => {
  const [user] = useAuthState(auth);

  return (
    <>
    <div>
      <div className="container-article">
        <Articles/>
      </div>
    </div>

    {
      !user ?
      <>
        ''
      </>
      :
      <>
      <div>
        <div>
          <AddArticle/>
        </div>
      </div>
      </>
    }
    </>
  )
}
