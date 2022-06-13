import React from "react"

function ArticlePreview({article}) {

   
    return (
        <div>
        
            <h2>{article.author}</h2>
            <h2>{article.title}</h2>
            <h4>{article.description}</h4>
            
        </div>
    )
}

export default ArticlePreview