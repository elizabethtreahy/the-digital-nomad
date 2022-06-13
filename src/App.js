import logo from './logo.svg';
import './App.css';
// import Login from './Login'
import { useEffect } from "react"

function App() {

  useEffect(() => {
    fetch('./articles')
    .then(resp => resp.json())
    .then(console.log)

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>THE DIGITAL NOMAD</h1>
      </header>
    </div>
  );
}

export default App;
