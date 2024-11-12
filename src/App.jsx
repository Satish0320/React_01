import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
   <>
      <Counter/>
   </>
  )
}

function Counter(){

    const [count, setCount] = useState(0)

    console.log("SetInterval here!!!!");
    
    useEffect(()=>{
      setInterval(()=>{
        setCount(count => count+1)
      }, 1000)
      console.log("mounted");
      
    },[])
    

    // function increase(){
    //   setCount (count+1);
    // }

  return <div>
    <h1>{count}</h1>
    {/* <button onClick={increase}>Increase</button> */}
  </div>
}



export default App
