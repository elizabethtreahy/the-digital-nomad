import React, { useState, useEffect } from "react"
import FavoritePreview from "./FavoritePreview"

function FavoriteArticles({ currentUser }) {
    const [favorites, setFavorites] = useState([])
    const [favoriteArticles, setFavoriteArticles] = useState([])
    useEffect(() => {
        fetch('./favorites')
            .then(resp => resp.json())
            .then(x => setFavorites(x))
    }, [])
    useEffect(() => {
        fetch(`./favorites/articles?currentUserId=${currentUser.id}`)
            .then(resp => resp.json())
            .then(x => setFavoriteArticles(x))
    }, [favorites])
    console.log(favoriteArticles)
    // console.log(favoriteArticles)

    const renderFavorites = favoriteArticles?.articles?.map((article) =>
    // console.log(article[0])
        <FavoritePreview currentUser={currentUser} article={article[0]} />)
    // )
    return (
        <div>
            <h2>My Favorites</h2>
            <div>
                {renderFavorites}

            </div>
        </div>
    )
}

export default FavoriteArticles