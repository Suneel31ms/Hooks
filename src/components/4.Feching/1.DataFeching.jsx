import React, { useEffect, useState } from 'react'

import axios from 'axios'
function DataFeching(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //get Request return the promise
    .then(res => {
      console.log(res);
      setPosts(res.data)
      
    })
    .catch(error =>{
      console.log(error);
    })
  },[])
  return(
    <div>
       <ul>
         {
          posts.map(post =>(
            <li key={post.id}>{post.title}</li>
          ))
         }
       </ul>
    </div>
  )
}
export default DataFeching;
