import { useEffect, useState } from "react";

export function Users()
{
  const [ users, setUsers ] = useState([]);
  const [ selfAPIResponse, setSelfAPIResponse ] = useState();

  useEffect(() =>
  {
    async function fetchAPIs()
    {
      const fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());

      setUsers(fetchedUsers);

      const fetchedSelfAPI = await fetch('/api/test')
        .then(response => response.text());

      setSelfAPIResponse(fetchedSelfAPI);
    }

    fetchAPIs();
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
      <h2>{selfAPIResponse}</h2>
    </ul>
  );
}
