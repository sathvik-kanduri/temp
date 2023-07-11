import React from 'react';
import './App.css';
import { useReducer } from 'react';



function App() {
  // const [state,setState]=useState();
  // const [count,setCount]=useState(0);
  // const [text,setText]=useState(true);

  // let onChange=(event)=>{
  //   setState(event.target.value);
  // };

  const reducer=(state,action)=>
  {
    switch(action.type)
    {
      case "INCREMENT":
      return {counter:state.counter+1,text:state.text}
      case "condition":
      return {counter:state.counter,text: !state.text}
    }
  }
    const [state,dispatch]=useReducer(reducer,{counter:0,text:true})
  
  
  console.log(state.counter);
  return(
    
  <div>
    {/* <input placeholder="enter something" onChange={onChange} />
    {state} */}
    <br></br>
    <br></br>
    {state.counter}
    <button onClick={()=>{
         dispatch({type:"INCREMENT"});
         dispatch({type:"condition"});
    }
    }>increment</button>
    {state.text && <p>this is even</p>}
     
    
  </div>
);


};

export default App;
