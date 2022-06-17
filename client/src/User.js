import React, {useEffect} from "react"
import { useHistory } from "react-router-dom"

function User({ currentUser, setCurrentUser }) {
    console.log(currentUser)

    const history = useHistory()
    
    const deleteUser = () => {
        fetch(`./users/${currentUser.id}`, { method: 'DELETE' })
            .then(data => {
                setCurrentUser(null)
                history.push("/")
            })
    }

    const redirectToEditForm = () => {
        history.push("/editprofile", currentUser)
    }

    
    return (
        <>
            <div>
                <h1 style={{fontSize: 'xx-large'}}>Your Details</h1>
                <h3>Name: {currentUser.first_name}</h3>
                <h3>Email: {currentUser.email}</h3>
                <button onClick={redirectToEditForm}>Update</button>
                <button onClick={deleteUser}>Delete</button>
            </div>
        </>
    )
}
export default User