import React, { useState, useEffect } from 'react'

const SearchBar = ({ setArticles }) => {
    const [searchInput, setSearchInput] = useState("");

    const countries = [
        
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
        { name: "France", countryCode: "fr" },
        { name: "United Kingdom", countryCode: "gb" },
        { name: "Greece", countryCode: "gr" },
        { name: "Hong Kong", countryCode: "hk" },
        { name: "Hungary", countryCode: "hu" },
        { name: "Indonesia", countryCode: "id" },
        { name: "Ireland", countryCode: "ie" },
        { name: "Israel", countryCode: "il" },
        { name: "India", countryCode: "in" },
        { name: "Italy", countryCode: "it" },
        { name: "Japan", countryCode: "jp" },
        { name: "South Korea", countryCode: "kr" },
        { name: "Lithuania", countryCode: "lt" },
        { name: "Latvia", countryCode: "lv" },
        { name: "Morocco", countryCode: "ma" },
        { name: "Mexico", countryCode: "mx" },
        { name: "Malaysia", countryCode: "my" },
        { name: "Nigeria", countryCode: "ng" },
        { name: "Netherlands", countryCode: "nl" },
        { name: "Norway", countryCode: "no" },
        { name: "New Zealand", countryCode: "nz" },
        { name: "Philippines", countryCode: "ph" },
        { name: "Poland", countryCode: "pl" },
        { name: "Portugal", countryCode: "pt" },
        { name: "Romania", countryCode: "ro" },
        { name: "Serbia", countryCode: "rs" },
        { name: "Russia", countryCode: "ru" },
        { name: "South Africa", countryCode: "sa" },
        { name: "Sweden", countryCode: "se" },
        { name: "Singapore", countryCode: "sg" },
        { name: "Slovenia", countryCode: "si" },
        { name: "Slovakia", countryCode: "sk" },
        { name: "Thailand", countryCode: "th" },
        { name: "Turkey", countryCode: "tr" },
        { name: "Taiwan", countryCode: "tw" },
        { name: "Ukraine", countryCode: "ua" },
        { name: "United States", countryCode: "us" },
        { name: "Venezuela", countryCode: "ve" },
        {name: "South Africa", countryCode: "za" }
    ];
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    function search(searchInput) {
        countries?.find((country) => {
            if (country.name.toLowerCase() == searchInput.toLowerCase()) {
                console.log('success', country)
                fetch(`./articles/country?countryCode=${country.countryCode}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then((r) => r.json())
                .then((data) => setArticles(data))
            } else {
                console.log('no result', country)
            }
        })
    }
    if (searchInput.length > 0) {
        countries.filter((country) => {
            return country.name.match(searchInput);
        });
    }
    return <div style={{textAlign: "center"}}>
        <input
            type="search"
            placeholder="Search by country"
            onChange={(e) => handleChange(e)}
            value={searchInput} />
        <button onClick={() => search(searchInput)}>Submit</button>
        <table>
            <tr>
                <th></th>
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