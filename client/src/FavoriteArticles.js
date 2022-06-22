import React, { useState, useEffect } from "react"
import FavoritePreview from "./FavoritePreview"

function FavoriteArticles({ currentUser }) {
    console.log(currentUser, currentUser[0])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('/favorites')
            .then(resp => resp.json())
            .then(x => {
                console.log(x, "looking for a favorite")
                setFavorites([...x])
            })

    }, [])
    console.log('favorites', favorites)

    const renderFavorites = favorites?.map((article) =>
        <FavoritePreview currentUser={currentUser} article={article} handleRemoveFavorite={handleRemoveFavorite}/>)

    function handleRemoveFavorite(doomedArticle) {
        console.log('i am dooooomed', doomedArticle)
        console.log(`ready to delete from ${doomedArticle} favorites`)
        setFavorites(favorites.filter((favorite) => favorite.id !== doomedArticle.id))
    }

    return (
        <div>
            <h2 style={{fontSize: 'xx-large', textAlign: "center", paddingTop: "80px"}}>My Favorites</h2>
            <div style={{textAlign: "center"}}>
                {renderFavorites}
            </div>
        </div>
    )
}
export default FavoriteArticles