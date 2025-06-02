import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [names, setNames] = useState([]) 

  useEffect(() => {
    axios.get('/api/name')
      .then((response) => {
        setNames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Simple UI</h1>
      <p>NAME COUNT: {names.length}</p>

      {names.map((person, index) => (
        <div key={person.id || index}>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
      ))}
    </>
  )
}

export default App
