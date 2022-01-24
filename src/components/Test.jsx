import React, { useEffect, useState } from 'react';

const Test = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  const  logMousePosition = (e) =>{
      console.log('Mouse event');
  setX(e.clientX)
  setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        //CleanUp Code 
       return ()=>{
           console.log('Component Unmounting code');
           window.removeEventListener('mousemove',logMousePosition)
       }
       
    },[])
  return (
    <div>
        X - {x} | Y - {y}
    </div>
  );
}

export default Test;
