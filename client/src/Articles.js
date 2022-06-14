import React, {useState, useEffect} from "react";
import ArticlePreview from "./ArticlePreview";
import SearchBar from "./SearchBar"

function Articles(){
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('./articles')
        .then(resp => resp.json())
        .then(x => setArticles(x))
    },[])
    console.log('articles', articles)

    const renderArticles = articles?.articles?.map((article) => 
    // console.log(article))
    <ArticlePreview article={article} />)

    return (
        <>
        <div>
            Articles
            </div>
            <div>
                Where are you going? Search by Country here.
                <SearchBar setArticles={setArticles}/>
            {/* searchbar setArticles = {set articles} */}
            </div>
            <div> {renderArticles}

            </div>
            </>

    
    )

}

export default Articles