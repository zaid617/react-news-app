import Post from "../post/Post"
import "./Feed.css"



export default function Feed(props) {

    return (
        <div className='feed'>
            <h1>Todays Headlines</h1>
            <hr />

            {props.data.map((eachpost) => (
              
                <Post key={eachpost.name} img={eachpost.image?.thumbnail?.contentUrl.replace("&pid=News" , "").replace("pid=News&" , "").replace("pid=News" , "")} name={eachpost.name} description={eachpost.description} date={eachpost.datePublished}/>
                
            ))

            }
        </div>
    )
}
