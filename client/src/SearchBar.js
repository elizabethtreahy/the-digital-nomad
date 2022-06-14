import React, { useState, useEffect } from 'react'

//const SearchBar = ({setArticles})
const SearchBar = ({ setArticles }) => {
    const [searchInput, setSearchInput] = useState("");
    // useEffect(() => {
    //     fetch('./articles/country/countryCode')
    //     .then((r)=>r.json())
    //     .then((data) => setArticles)
    // }, [])

    const countries = [
        { name: "France", countryCode: "fr" },
        { name: "United Arab Emirates", countryCode: "ae" },
        { name: "Argentina", countryCode: "ar" },
        { name: "Austria", countryCode: "at" },
        { name: "Australia", countryCode: "au" },
        { name: "Belgium", countryCode: "be" },
        { name: "Bulgaria", countryCode: "bg" },
        { name: "Brazil", countryCode: "br" },
        { name: "Canada", countryCode: "ca" },
        { name: "Switzerland", countryCode: "ch" },
        { name: "China", countryCode: "cn" },
        { name: "Colombia", countryCode: "co" },
        { name: "Cuba", countryCode: "cu" },
        { name: "Czechia", countryCode: "cz" },
        { name: "Germany", countryCode: "de" },
        { name: "Egypt", countryCode: "eg" },

    ];
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //    fetch(./articles/country/${country.countryCode}).then((r)=>r.json()).then((data) => setArticles)

    function search(searchInput) {
        //    const searchCountries = 
        // console.log(searchInput)
        countries?.find((country) => {
            // console.log('name', country.name, country.name == searchInput)
            if (country.name.toLowerCase() == searchInput.toLowerCase()) {
                // return (
                console.log('success', country)
                fetch(`./articles/country?countryCode=${country.countryCode}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // body: JSON.stringify(country.countryCode)
                })
                .then((r) => r.json())
                .then((data) => setArticles(data))
                // )
            } else {
                console.log('no result', country)
            }
        })
    }
    // console.log(searchInput)
    // fetch(`./articles/country/${country.countryCode}`)

    //onClick countries.find((country)) country.name == searchInput =>  
    if (searchInput.length > 0) {
        countries.filter((country) => {
            //    console.log('correct')
            return country.name.match(searchInput);
        });
    }
    //    console.log("search in", searchInput)
    return <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={(e) => handleChange(e)}
            value={searchInput} />
        <button onClick={() => search(searchInput)}>TEST</button>
        <table>
            <tr>
                <th>Country</th>
            </tr>
            {countries.map((country, index) => {
                <div>
                    <tr>
                        <td>{country.name}</td>
                    </tr>
                </div>
            })}
        </table>
    </div>

};
export default SearchBar;