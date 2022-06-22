import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Login from './Login'
// import NavBar from './NavBar'
import styles from "./styles"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function Home({ currentUser }) {
    const history = useHistory()
    const [data, setData] = useState()
    useEffect(() => {
        fetch('./articles')
            .then(resp => resp.json())
            .then(x => setData(x))

    }, [])
    // const renderLoginPage = () => {
    //     history.push("/login")
    // }
    // const renderSignUpPage = () => {
    //     history.push("/signup")
    // }
    return (
        <div  style={styles.nomad}>
            <div>THE DIGITAL NOMAD</div>

        </div>
    )
}
export default Home