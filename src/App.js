import React, { useContext } from 'react'
import './App.css';
import ClassCounter from './components/2.useEffect/1.ClassCounter';
import ClassMouse from './components/2.useEffect/2.ClassMouse';
import HookCounter from './components/2.useEffect/1.HookCounter';
import HookMouse from './components/2.useEffect/2.HookMouse';
import MouseContainer from './components/2.useEffect/3.MouseContainer';
import IntervalClassCounter from './components/3.useEffect/1.IntervalClassCounter';
import Test from './components/Test';
import Test1 from './components/Test1';
import IntervalHookCount from './components/3.useEffect/1.IntervalHookCount';
import DataFeching from './components/4.Feching/1.DataFeching';
import DataFechingg from './components/4.Feching/2.DataFechingg';
import ComponentC from './components/5.useContext/ComponentC';
// import HookCounter from './components/1.useState/4.HookCounter';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const AddressContext = React.createContext()

function App() {
  return (
    <div className="App">

      {/* <HookCounter/> */}

      {/* -------2.Effect----- */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}

      {/* ----------3.useEffect----- */}
      {/* <IntervalClassCounter/>
      <IntervalHookCount/> */}

      {/* ------4.Fetching-------- */}
      {/* <DataFeching/> */}
      {/* <DataFechingg/> */}

      {/* ------5.Context------ */}
    <UserContext.Provider value={'Arav'}>
      <ChannelContext.Provider value={'ThakurRaja'}>
      <AddressContext.Provider value={(city,st)=>(`Saraswat Enclave ${city},${st}`)}>
      <ComponentC/>
      </AddressContext.Provider>
      </ChannelContext.Provider>
    </UserContext.Provider>
    </div>
  );
} 

export default App;
