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
 
    <ArticlePreview style={{textAlign: "center"}} currentUser={currentUser} article={article} />)

    return (
        <>
        <div>
            </div>
            <div>
                <h1 style={{textAlign: "center", padding: "80px"}}>Where are you going? Search by Country here.</h1>
                <SearchBar style={{textAlign: "center", padding: "100px"}} setArticles={setArticles}/>
            {/* searchbar setArticles = {set articles} */}
            </div>
            <div style={{textAlign: "center"}}> 
                {renderArticles}
            </div>
            </>
    )

}
export default Articles