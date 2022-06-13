import React, {useState, useEffect} from "react";
import ArticlePreview from "./ArticlePreview";
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
        <div>
            Articles
            <div> {renderArticles}

            </div>

        </div>
    )

}

export default Articles