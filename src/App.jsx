import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchPage } from './pages/SearchPage'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'


function App() {

  return (
    <div className="App">
      <NavBar/>
      <SearchPage/>
      <Footer/>
    </div>
  )
}

export default App
