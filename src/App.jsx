import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      
      <Routes>
        <Route element={<Home/>} path='/'/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
