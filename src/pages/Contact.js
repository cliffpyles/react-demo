import React from 'react'
import { Link } from '@reach/router'
import Modal from '../components/Modal'
import TextBox from '../components/TextBox'
import Button from '../components/Button'

export default () => {
  return (
    <div className="ContactPage">
      <Modal title="Contact Us" onExit="/">
        <TextBox label="Email" name="email" />
        <TextBox label="Subject" name="subject" />
        <Button>Send</Button>
      </Modal>
    </div>
  )
}
