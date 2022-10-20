import { AttachMoney, Business, Flag, Group, HealthAndSafety, PlayCircle, PrecisionManufacturing, SportsCricket, Work } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sideBar'>

        <h3 className='h3'>Categories</h3>
      
      <div className="category">
          <ul>
              <li><SportsCricket/><span>Sports</span></li>
              <li><Group/><span>Politics</span></li>
              <li><Flag/><span>National</span></li>
              <li><Business/><span>Business</span></li>
              <li><AttachMoney/><span>Finance</span></li>
              <li><HealthAndSafety/><span>Health Care</span></li>
              <li><PrecisionManufacturing/><span>Technology</span></li>
              <li><PlayCircle/><span>Media</span></li>
              <li><Work/><span>Jobs</span></li>
          </ul>
      </div>

    </div>
  )
}
