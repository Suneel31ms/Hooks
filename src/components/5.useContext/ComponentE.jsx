import React, { useContext } from 'react';
import ComponentF from './ComponentF';

import {AddressContext} from '../../App'
 
 
function ComponentE() {
  const address = useContext(AddressContext);
  return (
    <div>
      
      <h2>Address - {address('Tundla','UP')}</h2>
        <ComponentF/>

    </div>
  );
}

export default ComponentE;
 