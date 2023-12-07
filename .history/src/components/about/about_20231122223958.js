import React from 'react'
import Footer from '../footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutAuxiliaryScreen from './aboutAuxiliary/AboutAuxiliaryScreen'
import Navigation from '../navigation/Navigation'

function About() {
  return (
    <div>
      <Navigation className="mb-3" />
      <AboutAuxiliaryScreen />
      <Footer/>
    </div>
  )
}

export default About