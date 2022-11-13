import { Fragment, useState } from 'react'
import './App.css'
import { Home } from './home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment className="App">
      <Home/>
    </Fragment>
  )
}

export default App;
