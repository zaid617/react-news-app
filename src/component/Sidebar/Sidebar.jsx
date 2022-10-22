import { AttachMoney, Business, Flag, Group, HealthAndSafety, PlayCircle, PrecisionManufacturing, SportsCricket, Work } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <div className='sideBar'>

            
      <div className="category">
      <div>
        <h3 className='h3'>Categories</h3>

            <hr />
            </div>      
          <ul>
              <li onClick={()=>{props.clickHandler("Sports")}}><SportsCricket className='icon'/><span>Sports</span></li>
              <li onClick={()=>{props.clickHandler("Politics")}}><Group className='icon'/><span>Politics</span></li>
              <li onClick={()=>{props.clickHandler("National")}}><Flag className='icon'/><span>National</span></li>
              <li onClick={()=>{props.clickHandler("usiness")}}><Business className='icon'/><span>Business</span></li>
              <li onClick={()=>{props.clickHandler("Finance")}}><AttachMoney className='icon'/><span>Finance</span></li>
              <li onClick={()=>{props.clickHandler("Health")}}><HealthAndSafety className='icon'/><span>Health Care</span></li>
              <li onClick={()=>{props.clickHandler("Technology")}}><PrecisionManufacturing className='icon'/><span>Technology</span></li>
              <li onClick={()=>{props.clickHandler("Media")}}><PlayCircle className='icon'/><span>Media</span></li>
              <li onClick={()=>{props.clickHandler("jobs")}}><Work className='icon'/><span>Jobs</span></li>
          </ul>
      </div>

    </div>
  )
}
