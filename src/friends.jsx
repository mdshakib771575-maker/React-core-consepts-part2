import { use } from "react"
import Friend from "./friend"

export default function Friends({frendsPromise}){
    const friends = use(frendsPromise)
    return(
        <div className="card">
            <h2>friends :{friends.length}</h2>
            {
                friends.map(friend =><Friend key={friend.id} friend={friend} ></Friend>)
            }
        </div>
    )
}