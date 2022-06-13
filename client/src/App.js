import logo from './logo.svg';
import './App.css';
// import Login from './Login'
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('./articles')
    .then(resp => resp.json())
    .then(x => setData(x))

  }, [])
  console.log('data', data)
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
