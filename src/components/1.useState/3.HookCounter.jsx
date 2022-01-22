import React, { useState } from "react";

// usestate is not automatically merge nor update but state do automatically
function HookCounter() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  // const handleInput = (event) =>{
  //     const{name,value} = event.target;
  //     setName({...name,[name]:value})
  // }
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
        />
        <h2>Your First Name is - {name.firstName}</h2>
        <h2>Your Last Name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter;
