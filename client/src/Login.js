import React, { useState } from 'react'
import Error from './Error'
import { useHistory } from "react-router-dom"

function Login({ setCurrentUser }) {
    const history = useHistory()
    const [error, setError] = useState()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, body: JSON.stringify(formData)
    }

    const loginUser = (e) => {
        e.preventDefault()
        fetch("/login", configObj)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(user => {
                        setCurrentUser(user) 
                        history.push('./articles')
                    })
                } else {
                    resp.json().then(err => {
                        setError(err.error)
                    })
                }
            })
    }

    const renderError = <Error key={error}>{error}</Error>

    return (
        <div style={{height: "100%", width: "100%", backgroundColor: "E2EEE7"}}>
            <h1 style={{textAlign: "center", paddingTop: "80px"}}>Sign into your account here.</h1>
            <form style={{textAlign: "center", padding: "100px"}} onSubmit={loginUser}>
                email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                <input type="submit" />
                {error ? renderError : null}
            </form>
        </div>
    )
}
export default Login