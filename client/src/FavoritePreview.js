import React, { useState, useEffect } from "react"

function FavoritePreview({ currentUser, article }) {
    const { author, title, description, url } = article

    // const handleRemove = () => {
    //     fetch(`/favorites/${currentUser.id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(r => r.json())
    // }


    return (
        <div>
            <h2>{author}</h2>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <a href={`${url}`}>Link to Article</a>
            {/* <button onClick={() => handleRemove()}>Remove</button> */}
        </div>
    )
}

export default FavoritePreview