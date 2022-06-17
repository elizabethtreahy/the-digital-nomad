import React from 'react'
import { NavLink } from 'react-router-dom'
// import styled from "styled-components"
import { useHistory } from "react-router-dom"




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
        <>
            <div className="navbar">
                <NavLink
                    exact to="/">
                    Home
                </NavLink>
                <NavLink
                    exact to="/articles"
                >
                    Let's Travel
                </NavLink>
                <NavLink
                    exact to="/favoritearticles"
                >
                    My Favorites
                </NavLink>
                <NavLink exact to="/user">
                    My Details

                </NavLink>

                <NavLink
                    // onClick={handleSignInAlert}
                    exact to="/editprofile"
                >
                    Edit Profile
                </NavLink>
                <NavLink
                    exact to="/"
                    onClick={handleLogout}>
                    Logout
                </NavLink>

            </div>
        </>
    )
}

export default NavBar