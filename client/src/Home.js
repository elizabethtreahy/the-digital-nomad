import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Login from './Login'
// import NavBar from './NavBar'

function Home({  currentUser }) {
    const history = useHistory()
    const [data, setData] = useState()
    useEffect(() => {
        fetch('./articles')
        .then(resp => resp.json())
        .then(x => setData(x))
    
      }, [])
    const renderLoginPage = () => {
        history.push("/login")
    }
    const renderSignUpPage = () => {
        history.push("/signup")
    }
    return (
        <>
        
            <div >
                {/* {console.log('hey from home')} */}
                <div className="App">
                    <header className="App-header">
                        <h1>THE DIGITAL NOMAD</h1>
                        <button onClick={renderLoginPage}>Login</button>
                        <button onClick={renderSignUpPage}>Sign Up</button>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Home