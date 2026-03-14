import { useState } from "react"

export default function Bowlers(){
    const[bowler,setBoler] = useState(0)
    const [ran,setRan]  = useState(0)

    function oneboll(){
        const newboll = bowler +1;
        setBoler(newboll)
    }
    function noboll(){
        const nobollRan = ran + 1
        setRan(nobollRan)
    }
    function wideboll(){
        const wideRan = ran + 1
        setRan(wideRan)
    }
    return(
        <div>
            <h2>Ran  : {ran}</h2>
            {
                bowler ==6 && <p>over is dan</p>
            }

            <h3>boll :{bowler} </h3>
            <button onClick={oneboll}>oneboll</button>
            <button onClick={noboll}>No boll</button>
            <button onClick={wideboll} >wide boll</button>
        </div>
    )
}