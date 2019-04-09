import React from 'react'

import './Card.css'

export default ({ children, title }) => {
  return (
    <div className="Card">
      <div className="Card__header">
        <h3 className="Card_title">{title}</h3>
      </div>
      <div className="Card__body">{children}</div>
    </div>
  )
}
