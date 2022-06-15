import React from "react"

function ArticlePreview({ currentUser, article }) {
    const { author, title, description, url, published_at } = article;
    const handleClick = async () => {
        const createdArticle = await createArticle()
        // console.log('article', createdArticle)
        // const createdFavorite = await createFavorite(createdArticle)
        // console.log('favorite', createdFavorite)
        // return [createdArticle, createdFavorite]
        // return createdArticle
    }

    const createArticle = async () => {
        const x = await fetch("./articles/save", {
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
            })
        })
        console.log('x', x)
        return x
    }
    // const createFavorite = async (createdArticle) => {
    //     console.log('created', createdArticle.json())
    //     const favoriteObj = {
    //         article_id: 2,
    //         user_id: 2,
    //     }
    //     const y =  await fetch("./favorite", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(favoriteObj)
    //     })
    //     // console.log('y', y)
    //     return y
    // }

    // // .then((data) => {
    // //     console.log('favorite', data.article.id, currentUser)
    // //     const favoriteObj = {
    // //         article_id: data.article?.id,
    // //         user_id: currentUser.id,
    // //     }
    // //     console.log('obj', favoriteObj)
    // //     fetch("./favorite", {
    // //         method: "POST",
    // //         headers: {
    // //             "Content-Type": "application/json"
    // //         },
    // //         body: JSON.stringify(favoriteObj)
    //     })}

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