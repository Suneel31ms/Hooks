import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFechingg() {
    const[post,setPost] = useState({});
    const[id,setId] = useState(1);
    const [idFromButtonClick, setidFromButtonClick] = useState(1);

const handleClick = () =>{
    setidFromButtonClick(id)
}

useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res =>{
        console.log(res);
      setPost(res.data)
    })
    .catch(err =>{
        console.log(err);
    })
},[idFromButtonClick])
  return(
    <div>
       
         {/* (value={}) - this is set to the value */}
     {/* onChange -- assign the value back to the input element */}
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Fetch</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFechingg;
