import { Call, Search } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import "./Navbar.css"

export default function Navbar(props) {
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
      <form className='search' >
        <input onChange={(e)=>{props.setValue(e.target.value)}} value={props.value}  placeholder='Enter search term' type="text"/>
        <button onClick={props.searchHandler} className='btn' ><Search /></button>
      </form>
    </div>
  )
}
