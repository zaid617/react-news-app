import React from 'react'
import moment from 'moment'
import "./Post.css"

export default function Post(props) {
  return (

    <div className="post">
    <div className="container">
        <img src={props.img} alt="" className="image" />
        <div className="overlay">
            <div className="text">{props.description}</div>
        </div>
    </div>
    <div className="titleBox">
    <div className="title"><h4>{props.name}</h4></div>
    <hr />
    <div className="date">{moment(props.date).format("Do MMMM YYYY, h:mm a")}</div>
    </div>

    {
     
      console.log(props.name)
      
    }
</div>

  )
}
