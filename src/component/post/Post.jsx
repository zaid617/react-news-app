import React from 'react'
import moment from 'moment'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
    <div className="container">
        <img src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" className="image" />
        <div className="overlay">
            <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptates doloribus hic nisi harum ut doloremque molestiae dolore labore quo ex fuga, optio eius sit unde facilis ipsum repellat? Quis.</div>
        </div>
    </div>
    <div className="titleBox">
    <div className="title"><h4>bbc news image title</h4></div>
    <div className="date">{moment().fromNow()}</div>
    </div>
</div>
  )
}
