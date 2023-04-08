import { useState } from 'react'
import Footer from './Footer';
import NavBar from './NavBar';
import WordOfTheDay from './WordOfTheDay';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <WordOfTheDay/>
      <Footer/>
    </div>
  )
}

export default App
