import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Error from './Error'


function Signup({ setCurrentUser }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const history = useHistory()
    const { firstName, lastName, email, password } = formData

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
        console.log(formData, "hi")
    }

    const createUser = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                password: formData.password
            })
            
        }).then((r) => r.json())
        .then(user => {
            console.log(user, "user")
            setCurrentUser(user) 
            history.push('./articles')})    
    }

    return (
        <>
            <div>
                <h1 style={{textAlign: "center", paddingTop: "80px"}}>Glad you're here.</h1>
                <form style={{textAlign: "center", padding: "100px"}} onSubmit={createUser}>
                    First Name:
                    <input onChange={handleChange} value={firstName} name="firstName" type="text" />
                    Last Name:
                    <input onChange={handleChange} value={lastName} name="lastName" type="text" />
                    Email:
                    <input onChange={handleChange} value={email} name="email" type="email" />
                    Password:
                    <input onChange={handleChange} value={password} name="password" type="password" />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}
export default Signup