import React, { useEffect, useState } from 'react';
// useEffect runs after every render 
const HookCounter = () => {
    const incCount = 0;
    const [count, setCount] = useState(incCount);
    const [name, setName] = useState('');

    useEffect(()=>{
      document.title =`Click ${count}`;
      console.log("Upadate-UseEffect");
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>setCount(prevCount =>prevCount + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default HookCounter;
