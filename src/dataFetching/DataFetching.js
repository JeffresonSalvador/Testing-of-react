import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setposts] = useState([]);
    const [id, setid] = useState(1);

    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res)
                setposts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

        return () => {
            
        }

    }, []);

    return (
        <div>
            <input type="text" value={id} onChange={ex => setid(ex.target.value)}/>
            <ul>
                {
                    posts.map(post => (
                    <li key={post.id} > {post.title} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
