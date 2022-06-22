import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function EditProfile({ currentUser, setCurrentUser }) {

  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    firstName: currentUser.first_name,
    lastName: currentUser.last_name,
    email: currentUser.email,
  })
  const history = useHistory()

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  };

  const updateUser = (e) => {
    console.log('entry', formData)
    e.preventDefault()
    const updatedProfile = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
      })
    }
    fetch(`/users/${currentUser.id}`, updatedProfile)
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            console.log('currentUser', data.firstName)
            setCurrentUser({
              id: currentUser.id,
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email
            })
            console.log('updatedUser right here', currentUser)
            setErrors([])
            history.push('/user')
          })
        } else {
          r.json().then(err => setErrors(err.errors))
        }
      })

  }

  return (
    <div>
      <h2 style={{fontSize: 'xx-large', textAlign: "center", paddingTop: "80px"}}>Update your information here.</h2>
      <form style={{textAlign: "center"}} onSubmit={updateUser}>
        First Name: 
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder={"Your first name"}
          onChange={(e) => handleInput(e)}
        />
        <br />
        Last Name: 
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder={"Your last name"}
          onChange={(e) => handleInput(e)}
        />
        <br />
        Email: 
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder={"Your email"}
          onChange={(e) => handleInput(e)}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}
export default EditProfile