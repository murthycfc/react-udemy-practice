
export default function UserList({users}){
    if(users.length===0){
        return<p>No users found</p>
    }
    return(
        <ul className="list-unstyled">
            {users.map((user) =>(
                <li key={user.id} className="border m-3 py-2">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                </li>
            ))}
        </ul>
    )
}