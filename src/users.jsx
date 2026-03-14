import { use } from "react"

export default function Users({fetctUsers}){

    const users = use(fetctUsers)
    console.log(users)

    return(
        <div className="card">
            <h2>Users :{users.length}</h2>
        </div>
    )
}