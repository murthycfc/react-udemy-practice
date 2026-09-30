import { useEffect, useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
      async function fetchUsers() {
          try {
            setLoading(true);
            setError(false);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
              throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
              setError(error.message);
          }
          finally{
            setLoading(false);
          }
      }
      fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className='container m-3 text-center'>
        <div className='mb-5 bg-secondary p-2'>
          <h2> User Search</h2>
        </div>
        <SearchBar search={search} setSearch={setSearch} />
        {loading && <p>Loading users....</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (<UserList users={filteredUsers}/>)}
    </div>
  )
}

export default App
