
import './App.css';
import Login from './Login';
import { useEffect, useState } from "react";
import User from "./User";
import Signup from "./Signup";
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from "./Home";
import NavBar from './NavBar';
import Articles from './Articles';
import EditProfile from './EditProfile';
import FavoriteArticles from './FavoriteArticles';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [error, setError] = useState()
  const history = useHistory()


  // console.log('data', data)

  useEffect(() => {
    fetch("/auth")
      .then(resp => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  return (
    <div style={{height: "100%", width:"100%"}}>
      <div>
        <NavBar setCurrentUser={setCurrentUser}>
        </NavBar>
      </div>
      <Switch>
        <Route exact path="/">
          <Home
            currentUser={currentUser} />
        </Route>
        <Route exact path="/login">
          <Login
            setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup
            setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/articles">
          <Articles
            currentUser={currentUser} />
        </Route>
        <Route exact path="/favoritearticles">
          <FavoriteArticles 
            currentUser={currentUser}/>
        </Route>
        <Route exact path="/user">
          <User 
            currentUser={currentUser}/>
        </Route>
        <Route exact path="/editprofile">
          <EditProfile
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  )
}
export default App
