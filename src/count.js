import  { useContext } from 'react'
import { themeContext } from './context';



function Count()
{
   const {value}=useContext(themeContext);
   const {setValue}=useContext(themeContext);
   console.log(themeContext);
   console.log(setValue);
   return (
      <p>{value}</p>
   )

}

export default Count;