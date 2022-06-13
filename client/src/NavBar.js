import React from 'react'
import { NavLink } from 'react-router-dom'
// import styled from "styled-components"




function NavBar({ currentUser, setCurrentUser }) {

    const handleSignInAlert = () => {
        alert("You must be logged in to access this page! Redirecting to sign up now...")
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        })
            .then(r => r.json())
            .then(setCurrentUser())
    }

    return (
        <div>
            {currentUser ?
                // NavBar for User that is logged in
                (
                    <>
                        <NavLink
                            exact to="/"
                            // activeStyle={active}
                        >
                            Hey {currentUser.name}!
                        </NavLink><NavLink
                            exact to="/favorite"
                            // activeStyle={active}
                        >
                            Your Articles
                        </NavLink>
                        <NavLink style={{ fontSize: '18px' }} exact to="/" onClick={handleLogout}>
                            Logout
                        </NavLink>
                        </>

                ) :
                (
                  <>
                  <NavLink
                            exact to="/">
                                Home
                            </NavLink>
                        <NavLink
                            exact to="/articles"
                            // activeStyle={active}
                        >
                            Let's Travel
                        </NavLink>
                        <NavLink
                            onClick={handleSignInAlert}
                            exact to="/signup"
                        >
                            My Favorites
                        </NavLink>
                        <NavLink
                            onClick={handleSignInAlert}
                            exact to="/signup"
                        >
                            My Details
                        </NavLink>
                        </>
                    
                )}
        </div>
    )
}

export default NavBar