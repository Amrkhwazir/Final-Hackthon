import React from 'react'
import "./list.css"
import Navbar from '../navbar/Navbar'
import Student from '../student/Student'

const List = (type) => {
  return (
    <div className='listContainer'>
        <Navbar />
        <div className='studentDetail'>
        <Student type={type}/>
        </div>
    </div>
  )
}

export default List