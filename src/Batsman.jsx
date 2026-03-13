import { useState } from "react"

export default function Batsman() {
    const [rans, setRans] = useState(0)
    const [sixes, setSix] = useState(0)

    const single = () => {
        const updateRans = rans + 1;
        setRans(updateRans)
    }
    const six = () => {
        const updateRans = rans + 6;
        setRans(updateRans)
        const updateSixes = sixes + 1;
        setSix(updateSixes)
    }

    const four = () => {
        const updateRans = rans + 4;
        setRans(updateRans);
    }
    return (
        <div>
            <h3>player : Bangla Batsman</h3>
            <h2>score :{rans}</h2>
            {
                rans >=50 && <p>Your Score is 50</p>
            }
            <p><small>six :{sixes}</small></p>
            <button onClick={single}>Single</button>
            <button onClick={six}>Six</button>
            <button onClick={four}>Four</button>
        </div>
    )
}