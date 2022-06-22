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
                <h1 style={{fontSize: 'xx-large', textAlign: "center", paddingTop: "80px"}}>Your Details</h1>
                <h3 style={{textAlign: "center"}}>Name: {currentUser.first_name}</h3>
                <h3 style={{textAlign: "center"}}>Email: {currentUser.email}</h3>
                <div style={{textAlign: "center"}}>
                <button style={{textAlign: "center"}} onClick={redirectToEditForm}>Update</button>
                <button style={{textAlign: "center"}} onClick={deleteUser}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default User