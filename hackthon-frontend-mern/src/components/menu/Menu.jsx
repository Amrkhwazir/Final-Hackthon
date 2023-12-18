import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link, Navigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./menu.css"
import { useNavigate } from 'react-router-dom';



const Menu = () => {
    const navigate = useNavigate();
    
        const logoutHandler = () => {
            localStorage.removeItem('user');
            
            navigate("/")
        }
  return (
    <div className='container'>
    <div className='wrapper'>
    <Link to="/" style={{textDecoration: "none", color: 'inherit'}}>
    <div className='logo'>
    <img className='img' src=""/>
    profile
    </div>
    </Link>
        <div className='items'>
            <PersonIcon style={{color: "#3ea6ff"}}/>
            Students
            
        </div>
        <Link to="subscriptions" style={{textDecoration: "none", color: "inherit",}}>
        <div className='items'>
        <AccountBoxIcon style={{color: "#3ea6ff"}}/>
            Attendance
        </div>
        </Link>
        {/* <hr /> */}
    <div className='button' onClick={logoutHandler}>Logout</div>

    </div>
</div>
  )
}

export default Menu