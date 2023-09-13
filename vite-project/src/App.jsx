import React from 'react'
import Header from './page/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}
