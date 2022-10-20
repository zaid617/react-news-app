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
    <div className="date">{moment(props.date).fromNow()}</div>
    </div>
</div>

  )
}
