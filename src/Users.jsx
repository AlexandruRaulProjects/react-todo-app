import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/users?limit=5";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((data) => setUsers(data.users));
  }, []);

  /*

    Scrieri echivalente: 
    
        users.map(user => {
        console.log('user from map', user);
    })

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
    */

  return (
    <div>
      {
        // users.map(user => (
        // <div key={user.id}>
        //     Full Name: {user.firstName} {user.lastName}
        // </div>
        // ))
      }
    </div>
  );
}

export default Users;
