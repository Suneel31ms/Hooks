import React, { useEffect, useState } from 'react';

const Test1 = () => {
 const [count,setCount] = useState(0);

 const tick =()=>{
    setCount(prevState =>prevState )
}
 
useEffect(()=>{
   setInterval(tick,1000)
})
  return (
    <div>
       <h1>{count}</h1>
    </div>
  );
};

export default Test1;
