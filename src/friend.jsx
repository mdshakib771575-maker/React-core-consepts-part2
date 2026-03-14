export default function Friend({ friend }) {
    console.log(friend);
    const { name, email, phone, company } = friend;

    return (
        <div className="card">
            <h2>Name :{name}</h2>
            <h3>Email : {email}</h3>
            <h3>phone :{phone}</h3>
            <h3>company :{company.name}</h3>
        </div>
    )
};