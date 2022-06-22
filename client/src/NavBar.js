import React from 'react'
import { NavLink } from 'react-router-dom'
// import styled from "styled-components"
import { useHistory } from "react-router-dom"
import styles from './styles'






function NavBar({ currentUser, setCurrentUser }) {
    const history = useHistory()

    const handleSignInAlert = () => {
        alert("You must be logged in to access this page! Redirecting to sign up now...")
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        })
            .then(r => r.json())
            .then(() => {
                setCurrentUser()
                history.push('./articles')
            })

    }

    return (
        <div syle={{position: "fixed", bottom: "0", width: "100%"}} >
            <div >
                <NavLink style={styles.navlink}
                    exact to="/">
                    Home
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/login">
                    Login
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/signup">
                    Sign Up
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/articles">
                    Let's Travel
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/favoritearticles">
                    My Favorites
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/user">
                    My Details
                </NavLink>
                <NavLink style={styles.navlink}
                    // onClick={handleSignInAlert}
                    exact to="/editprofile">
                    Edit Profile
                </NavLink>
                <NavLink style={styles.navlink}
                    exact to="/"
                    onClick={handleLogout}>
                    Logout
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar