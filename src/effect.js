import React, { useEffect, useState } from 'react';

const Effect=()=>{

const [state,setState]=useState('');
const [text,setText]=useState([]);

useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then(response => response.json())
      .then(json => setText(json))
},[state])

return (
    <div>
<button onClick={()=>setState('posts')}>posts</button>
<button onClick={()=>setState('users')}>user</button>
<button onClick={()=>setState('comments')}>content</button>


<h1>{state}</h1>
{text.map (item=> {
    return <pre>{JSON.stringify(item)}</pre>
})}

</div>
);

}

export default Effect;
























































// import React, { useState } from "react";
// import Axios from "axios";

// function Effect()
// {
//     const [state,setState]=useState("")
//     const effect=()=>
//     {
//         Axios.get(' https://api.themoviedb.org/3/trending/all/week?api_key=20be784f740b6b638c906dde5b35efae').then((response) => {
          
//         console.log(response.data.results[0].backdrop_path);
       
       
//         setState(response.data.results[i].overview);
        
//         })
       
//     }
    
//     return(
//      <div>
//         {state}
//      <button onClick={effect}>effect</button>
//      </div>
//     );
// }
// export default Effect;