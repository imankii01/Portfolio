import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { Home } from './components/Home/Home'


const App = () => {
  return (
    <>
    <Header/>
   
    <main className="main">
    <Home/>
    </main>
    </>
  )
}

export default App

