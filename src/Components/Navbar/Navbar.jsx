import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';

import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
const Navbar=({setSidebar})=>{


    return (
      
        <nav className='flex-div'>

        <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt=""></img>
        <img className='logo' src={logo} alt=""></img>
        </div>
        <div className='nav-middle flex-div'>
            <div className='search-box' flex-div>
        <input type="text" placeholder="Search">
        </input>
        <img className='logo' src={search_icon} alt=""></img>
        </div>
        </div>
        <div className='nav-right flex-div'>
        <img src={upload_icon} alt=""></img>
        <img  src={more_icon} alt=""></img>
        <img  src={notification_icon} alt=""></img>
        <img className='user-icon' src={profile_icon} alt=""></img>
        </div>
        </nav>

      
     
    )
}
export default Navbar;