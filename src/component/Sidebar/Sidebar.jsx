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
              <li onClick={()=>{props.clickHandler("Sports")}}><SportsCricket/><span>Sports</span></li>
              <li onClick={()=>{props.clickHandler("Politics")}}><Group/><span>Politics</span></li>
              <li onClick={()=>{props.clickHandler("National")}}><Flag/><span>National</span></li>
              <li onClick={()=>{props.clickHandler("usiness")}}><Business/><span>Business</span></li>
              <li onClick={()=>{props.clickHandler("Finance")}}><AttachMoney/><span>Finance</span></li>
              <li onClick={()=>{props.clickHandler("Health")}}><HealthAndSafety/><span>Health Care</span></li>
              <li onClick={()=>{props.clickHandler("Technology")}}><PrecisionManufacturing/><span>Technology</span></li>
              <li onClick={()=>{props.clickHandler("Media")}}><PlayCircle/><span>Media</span></li>
              <li onClick={()=>{props.clickHandler("jobs")}}><Work/><span>Jobs</span></li>
          </ul>
      </div>

    </div>
  )
}
