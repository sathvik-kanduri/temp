import React, { useEffect, useRef, useState } from 'react'

function Ref(){

const [name,setName]=useState();
const input=useRef();
const sub=useRef();

function focus()
{
    input.current.focus();
    input.current.value="text";
    console.log(input);
    console.log(sub);
}
   
    return (
        <div>
        <input  ref={input} value={name} onChange={e => setName(e.target.value)} />
       
        
        <h1>{name}</h1>
        <h1>the count is{input.current}</h1>
        <button ref={sub} onClick={focus}>take</button>
        </div>
    )
}

export default Ref;