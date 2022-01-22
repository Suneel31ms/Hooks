import React from 'react'
import './App.css';
import ClassCounter from './components/2.useEffect/ClassCounter';
import HookCounter from './components/2.useEffect/HookCounter';
// import HookCounter from './components/1.useState/4.HookCounter';


function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      <HookCounter/>
    </div>
  );
}

export default App;
