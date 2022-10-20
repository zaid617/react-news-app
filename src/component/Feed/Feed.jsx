import React from 'react'
import Post from '../post/Post'
import "./Feed.css"

export default function Feed() {
    return (
        <div className='feed'>
            <h1>Todays Headlines</h1>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
