import { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { data } from "./data";

const url = "https://jsonplaceholder.typicode.com/todos";
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  //   const [people, setPeople] = useState(data);
  const getUsers = async () => {
    const response = await fetch(url);

    const usersList = await response.json();
    setUsers(usersList);
    console.log(usersList);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h3>github users</h3>
      <List>
        {users.map((user) => {
          const { id, title } = user;
          return (
            <li key={id}>
              <div>
                <h4>{title}</h4>
              </div>
            </li>
          );
        })}
      </List>
    </div>
  );
};
export default UseEffectFetchData;
