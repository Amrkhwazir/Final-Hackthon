import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '@mui/material';


const Navbar = () => {
    const navigate = useNavigate();
    var currentUser = JSON.parse( localStorage.getItem('user') );
    console.log(currentUser);

    const [searchQuery, setSearchQuery] = useState("");
    /* console.log(currentUser) */
      return (
        <>
          <div className='containerNav'>
          <div className='wrapperNav'>
          <div className='user'>
                    <img className='avatar' src="https://th.bing.com/th/id/OIP.WRzZJlYLzOB8y3yeI5MvfgAAAA?rs=1&pid=ImgDetMain" />
                    {currentUser.username}
                    </div>
          <div className='search'>
                <input className='input' placeholder='Search' onChange={e=> setSearchQuery(e.target.value)}/>
                <SearchIcon onClick={()=>navigate(`/search?q=${searchQuery}`)} />
                </div>
    
            
            <button className='addButton' onClick={()=> navigate("/adduser")}>Add Student</button>
        
                 
            </div>
            </div>
            </>
        )
    }

export default Navbar