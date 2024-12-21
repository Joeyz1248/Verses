import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const [bibleVerse, setBibleVerse] = useState([])

  const fetchBibleVerse = async () => {
    const response = await fetch('https://bible-api.com/?random=verse')
    const data = await response.json()
    console.log(data)
    setBibleVerse(data)
  }

  return(
    <div>
      {fetchBibleVerse}
      <h1>BIBLE VERSE</h1>
      <h2>{bibleVerse.reference}</h2>
      <p>{bibleVerse.text}</p>

      <button onClick={fetchBibleVerse}>New Verse</button>
      <br /><br /><br />
    </div>
  )
}

export default App
