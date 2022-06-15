import React, {useState, useEffect} from "react";
import ArticlePreview from "./ArticlePreview";
import SearchBar from "./SearchBar"

function Articles({currentUser}){
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('./articles')
        .then(resp => resp.json())
        .then(x => setArticles(x))
    },[])
    console.log('articles', articles)
    console.log(currentUser)
    const renderArticles = articles?.articles?.map((article) => 
    // console.log(article))
    <ArticlePreview currentUser={currentUser} article={article} />)

    return (
        <>
        <div>
            
            </div>
            <div>
                <h4>Where are you going? Search by Country here.</h4>
                <SearchBar setArticles={setArticles}/>
            {/* searchbar setArticles = {set articles} */}
            </div>
            <div> {renderArticles}

            </div>
            </>

    
    )

}

export default Articles