import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Error from './Error'

function Signup({ setCurrentUser }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const history = useHistory()
    const { name, email, password } = formData

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }


    const createUser = (e) => {
        e.preventDefault();

     
        fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
               
            },
            body: JSON.stringify({
                firstName: "test",
                lastName: "testytest",
                email: "test@test.com",
                password: "test1"
            })
        })
    }
    // console.log(formData)


    return (
        <>
            {/* <div>
            {console.log('hey from signup')}
        </div> */}
            <div>
                <h1>Glad you're here.</h1>
                <form onSubmit={createUser}>
                    First Name:
                    <input onChange={handleChange} value={name} name="name" type="text" />
                    Last Name:
                    <input onChange={handleChange} value={name} name="name" type="text" />
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