import { useEffect, useState } from "react";

export function Users()
{
  const [ users, setUsers ] = useState([]);

  useEffect(() =>
  {
    async function fetchAPI()
    {
      const fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());

      setUsers(fetchedUsers);
    }

    fetchAPI();
  }, [ ]);

  return (
    <ul>
    {
      users.map(({ name, username, email }) =>
        <li>
          <strong>{name}</strong>
          <span> - {username}</span>
          <span> - {email}</span>
        </li>
      )
    }
    </ul>
  );
}
