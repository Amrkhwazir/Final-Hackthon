import React from 'react'
import Menu from "../menu/Menu.jsx"
import List from '../list/List.jsx'
import "./attendance.css"

export const Attendance = () => {
  return (
    <div className='attendanceContainer'>
        <Menu />
        <List type="attend" />
    </div>
  )
}
