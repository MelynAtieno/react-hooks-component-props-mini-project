import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    return(
        <main>
    <Article
      id={posts.id}
      title={posts.title}
      date={posts.date}
      preview={posts.preview}
      
    />
  
        </main>
    );
}

export default ArticleList;