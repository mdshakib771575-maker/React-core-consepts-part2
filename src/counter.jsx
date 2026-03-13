import { useState } from "react"

export default function Conunter(){
    const [count,setCount]=useState(0)
const handleadd = ()=>{
    const newCount = count + 1;
    setCount(newCount)
}



    const conuterStyle ={
        border:'2px solid red' 
    }

    return(
        <div style={conuterStyle}>
            <h2>count : {count}</h2>
            <button onClick={handleadd}>add</button>
        </div>
    )
}