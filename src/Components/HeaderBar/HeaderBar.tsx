import React from 'react'
import './styles.scss'
import back from '../../Images/back.png'
import frame from '../../Images/frame.png'
import notification from '../../Images/notification.png'
import settings from '../../Images/settings.png'
import circle from '../../Images/circle.png'

export default function HeaderBar() {
  return (
    // HeaderBar Component
    <div className='headerBar-content d-flex align-items-center'>
      <img src={back} className='back-icon' alt='back' />
      <img src={frame} className='frame-icon' alt='frame' />
      <select className='form-select form-select-lg customize-select'>
        <option value='Johndoe.near'>
          Johndoe.near
        </option>
      </select>
      <img src={notification} className='notification-icon' alt='notification' />
      <img src={settings} className='settings-icon' alt='settings' />
    </div>
  )
}