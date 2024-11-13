import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);

  function increase(){
    setcount(c => c+1);
  }

  function decrease(){
    setcount2( c => c-1);
  }

  return (
   <>
   <Counter count = {count}  count2 = {count2}/>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>decrease</button>
   </>
  )
}

function Counter (props) {

useEffect(()=>{
  console.log("Mount");
  
  return ()=>{
    console.log("unmount");
    
  }
},[])


useEffect(()=>{
  console.log("count has changed ");

  
  return ()=>{
    console.log("count unmount");
  }
},[props.count2])


  return <div>
      Counter 1: {props.count} <br />
      Counter 2: {props.count2}
    </div>
  
}


export default App
