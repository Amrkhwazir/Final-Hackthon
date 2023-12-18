import React, { useState } from 'react'
import "./adduser.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const AddUser = () => {

  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [course, setCourse] = useState("")
  const [phnNumber, setPhnNumber] = useState("")
const navigate = useNavigate()

let existingArray = JSON.parse(localStorage.getItem('course')) || [];

  const addUserHandler = async (e) => {
    console.log(firstname,lastname,email,password,phnNumber,course, "data")
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/addstudent", {email, password, phnNumber, course, firstname, lastname});
      console.log(res.data);

      existingArray.push(res.data);

    localStorage.setItem("course",JSON.stringify(existingArray));
      navigate("/attendance");
    } catch (err) {
      console.log(err)
    }

  }

// const storageRef = ref(storage, 'images/rivers.jpg');

// const uploadTask = uploadBytesResumable(storageRef, file);

// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
  return (
    <div className='addUserContainer'>
        <div className='userImage'>
        <div className='userAddButton' onClick={addUserHandler}>
            Add 
        </div>
        <div className='backtoPage' onClick={()=> navigate("/dashboard")} >
            back 
        </div>
            <img className='studentImage' src='https://th.bing.com/th/id/OIP.WRzZJlYLzOB8y3yeI5MvfgAAAA?rs=1&pid=ImgDetMain'  />
        </div>
        <div className='userInputFeilds'>

            <div className='inputField'>
            <label>First Name</label>
            <input type='text'  placeholder='Enter  Your First name' required  style={{marginBottom: "50px"}} onChange={(e)=>setFirstName(e.target.value)} />
            <br/>
            <label>Last Name</label>
            <input type='text' placeholder='Enter Your Last name' required  style={{marginBottom: "50px"}} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className='inputField'>
            <label>Course</label>
            <input type='text' placeholder='Enter Your Course' required style={{marginBottom: "50px"}} onChange={(e)=>setCourse(e.target.value)} />
            <br/>
            <label>Password</label>
            <input type='password' placeholder='Enter Your Password' required style={{marginBottom: "50px"}} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='inputField'>
            <label>Email</label>
            <input type='email' placeholder='Enter Your Email' required style={{marginBottom: "50px"}}  onChange={(e)=>setEmail(e.target.value)} />
            <br/>
            <label>Phone Number</label>
            <input type='text' placeholder='Enter Your Phone Number' required style={{marginBottom: "50px"}}  onChange={(e)=>setPhnNumber(e.target.value)}/>
            </div>
           
        </div>
    </div>
  )
}

export default AddUser