import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'

import './styles.css'

function App() {
  return (
    <Router className="App">
      <HomePage path="/" />
      <AboutPage path="/about" />
      <ContactPage path="/contact" />
    </Router>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
