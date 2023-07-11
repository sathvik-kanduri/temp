import React, { useState } from 'react'
import Count from './count'
export const themeContext=React.createContext();

function Context()
{
  const [value,setValue]=useState(6);
 
  function handle()
  {
    
    setValue(value=>value+1);
    
  }
  return (
   <div>
    
    <themeContext.Provider value={{value,setValue}}>
    <button onClick={handle}>Toggle button</button>
      <Count />
    </themeContext.Provider>
    </div>
  );
}

export default Context;