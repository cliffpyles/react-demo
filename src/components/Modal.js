import React from 'react'
import { Link } from '@reach/router'
import Card from './Card'

import './Modal.css'

export default ({ children, onExit, title }) => {
  return (
    <div className="Modal">
      <div className="Modal__box">
        <Link className="Modal_exit" to={onExit}>
          X
        </Link>
        <Card title={title}>{children}</Card>
      </div>
    </div>
  )
}
