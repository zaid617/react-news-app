import { Call } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='header'>
      <div className='logo'>NEWS</div>
      <div className='icons'>
          <ul>
              <li><HomeIcon/> <span>Home</span></li>
              <li><Info/><span>About</span></li>
              <li><Call/> <span>Contact Us</span></li>
          </ul>
      </div>
      <form className='search'>
        <input type="search" id=""  placeholder='Enter search term'/>
      </form>
    </div>
  )
}
