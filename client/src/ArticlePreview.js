import React from "react"

function ArticlePreview({ currentUser, article }) {
    const { author, title, description, url, published_at } = article;
    
    const handleClick = async () => {
        await createArticle()
    }

    const createArticle = async () => {
        return await fetch("./articles/save_and_favorite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author,
                title,
                description,
                url,
                published_at,
                user_id: currentUser.id,
                // id: article.id
            })
        })
    }
// console.log(article, "hello article")
    return (
        <div>
            <h2>{author}</h2>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <a href={`${url}`}>Link to Article</a>
            <button onClick={() => handleClick()}>Save for Later</button>
        </div>
    )
}

export default ArticlePreview