import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Nav'
import About from './Component/About'
import Sale from './Component/sale'
import Price from './Component/Price'
import Quote from './Component/Quote'
import Choose from './Component/Choose'
import Reviews from './Component/Reviews'
import Contact from './Component/Contact'

function App() {

  return (
    <>
      <Nav/>
      <About/>
      <Sale/>
      <Price/>
      <Quote/>
      <Choose/>
      <Reviews/>
      <Contact/>
    </>
  )
}

export default App
