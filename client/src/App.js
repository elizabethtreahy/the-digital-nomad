
import './App.css';
import Login from './Login'
import { useEffect, useState } from "react"
import User from "./User"
import Signup from "./Signup"
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from "./Home"
import NavBar from './NavBar';
import Articles from './Articles';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState()
  const history = useHistory()

  
  // console.log('data', data)

  // useEffect(() => {
  //   fetch("/auth")
  //     .then(resp => {
  //       if (resp.ok) {
  //         resp.json().then(user => {
  //           setCurrentUser(user)
  //         })
  //       }
  //     })
  // }, [])


  return (
    <div>
      <div>
      <NavBar></NavBar>

      </div>
      
    <Switch>

      <Route exact path="/">
        <Home
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}/>
      </Route>

      <Route exact path="/login">
        <Login
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      </Route>

      <Route exact path="/signup">
        <Signup
          setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/articles">
        <Articles/>
          
      </Route>

    </Switch>
  
  </div>
  )}

export default App
