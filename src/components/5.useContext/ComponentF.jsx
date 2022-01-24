import React, { useContext } from 'react';

import {UserContext, ChannelContext } from '../../App'

function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext)
  return (
    //-----------------using normal context---------------
    // <div>
    //     Hello Component F1
    //    <UserContext.Consumer>
    //      {
    //        username =>{
    //          return(
    //            <ChannelContext.Consumer>
    //              {channel =>{
    //                return(<div>User:{username} channel: {channel}</div>)
    //              }
    //              }
    //            </ChannelContext.Consumer>
    //          )
    //        }
    //      }
    //    </UserContext.Consumer>
       
    // </div>
    //---------------------***--------------------

    <div>
      <h3>User - {user}</h3>
      <h4>Channel - {channel}</h4>
    </div>
  );
} 

export default ComponentF;
