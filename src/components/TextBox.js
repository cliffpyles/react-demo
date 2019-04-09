import React from 'react'

import './TextBox.css'

export default ({ label, name }) => {
  return (
    <div className="TextBox">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" />
    </div>
  )
}
