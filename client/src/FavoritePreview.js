import React, { useState, useEffect } from "react"

function FavoritePreview({ currentUser, article, handleRemoveFavorite }) {
    const { author, title, description, url } = article

    const handleRemove = () => {
        console.log("i am an article", article)
        fetch(`./favorites/destroy?articleId=${article.id}`, {
            method: 'DELETE'
        })
        handleRemoveFavorite(article)
        
    }


    return (
        <div>
            <h2>{author}</h2>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <a href={`${url}`}>Link to Article</a>
            <button onClick={() => handleRemove()}>Remove</button>
        </div>
    )
}

export default FavoritePreview