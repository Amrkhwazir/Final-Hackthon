import React from 'react'
import "./student.css"

const Student = (type) => {

    const currentUser = JSON.parse( localStorage.getItem('user') );
    const studentData = JSON.parse( localStorage.getItem('course') );
    // console.log(currentUser);
    console.log(studentData);
  return (
    <div className='studentCont'>
        <div className='studentWrapper'>
          {type === "attend" ? <>  <span >id</span>
            <span>Profile img</span>
            <span>Name</span>
            <span >Check In</span>
            <span>Check Out</span></> : <>  <span >id</span>
            <span>Profile img</span>
            <span>Name</span>
            <span >Course Name</span>
            <span>Password</span></>}
        </div>
        {studentData.map((studentData)=>{
          return    <div className='studentAddDetail'>
        {type === "attend" ?  <> <span className='studentId'>{studentData._id}</span>
          <span className='studentImg'>Profile img</span>
          <span className='studentName'>{studentData.firstname + studentData.lastname}</span>
          <span className='studentCourse'>{studentData.updatedAt}</span>
          <span className='studentPhn'>{studentData.updatedAt}</span> </> : <>  <span className='studentId'>{studentData._id}</span>
          <span className='studentImg'>Profile img</span>
          <span className='studentName'>{studentData.firstname + studentData.lastname}</span>
          <span className='studentCourse'>{studentData.course}</span>
          <span className='studentPhn'>{studentData.password}</span></>}
          </div> 
        })}

    </div>
  )
}

export default Student