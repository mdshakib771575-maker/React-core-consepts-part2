// import { useState } from 'react'
import './App.css'
import Batsman from './Batsman'
import Conunter from './counter'

function App() {
 function handleClick(){
  alert('i am clicked')
 }
 const handaler4 = ()=>{
  alert('yes i am arrow click')
 }

 const handaler5 = (num)=>{
  const newNum = num
  alert(newNum)
 }

  return (
    <>
    
       <Conunter></Conunter>
       <Batsman></Batsman>
      <h3> Vite - React</h3>
      <button onClick={handleClick}>click me</button>
      <button onClick={function(){alert("Hello I am Shakib")}}>click me</button>
      <button onClick={function(){alert("Hello I am Shakib")}}>click me</button>
      <button onClick={handaler4}>click me 4</button>
      <button onClick={()=>handaler5(10)}>click me 5</button>
      
      

      
    </>
  )
}

export default App
