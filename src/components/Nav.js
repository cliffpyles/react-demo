import React from 'react'
import { Link } from '@reach/router'
import Level from './Level'

import './Nav.css'

export default ({ children }) => {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
