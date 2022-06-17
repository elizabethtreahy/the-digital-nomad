import React, { useState, useEffect } from "react"
import FavoritePreview from "./FavoritePreview"

function FavoriteArticles({ currentUser }) {
    console.log(currentUser, currentUser[0])
    const [favorites, setFavorites] = useState([])
    // const [favoriteArticles, setFavoriteArticles] = useState([])
    useEffect(() => {
        fetch('/favorites')
            .then(resp => resp.json())
            .then(x => {
                console.log(x, "looking for a favorite")
                setFavorites([...x])
            })
            // console.log(x, "")
    }, [])
    console.log('favorites', favorites)
    // useEffect(() => {
    //     fetch(`./favorites/articles?currentUserId=${currentUser[0].id}`)
    //         .then(resp => resp.json())
    //         .then(x => setFavoriteArticles(x))
    // }, [favorites])
    // console.log(favoriteArticles)
    // console.log(favoriteArticles)

    const renderFavorites = favorites?.map((article) =>
    // console.log(article[0])
        <FavoritePreview currentUser={currentUser} article={article} handleRemoveFavorite={handleRemoveFavorite}/>)
    // )

    function handleRemoveFavorite(doomedArticle) {
        console.log('i am dooooomed', doomedArticle)
        console.log(`ready to delete from ${doomedArticle} favorites`)
        // setFavorites.find(where favorite.id === doomedArticle.id)
        setFavorites(favorites.filter((favorite) => favorite.id !== doomedArticle.id))
    }

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