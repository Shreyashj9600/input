import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [status, setState] = React. useState(false)

  return (
    <div className='App'>
        {
          status ? <h1>Hello World !</h1> : null
        }
      <button onClick={()=> setState(false)}>Hide</button>
      <button onClick={()=> setState(true)}>Show</button>
    </div>
  )
}


// getting value from input
// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
//   function getData(val) {
//     console.log(val.target.value);
//     setData(val.target.value)
//   }
//   return (
//     <div className='App'>
//       {
//         print?  
//         <h1>{data}</h1>   
//         :null
//       }
//       <input type='text' onChange={getData} />
//       <button onClick={() => setPrint(true)}> print Data </button>
//     </div>
//   );
// }

export default App;
