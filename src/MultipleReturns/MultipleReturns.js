import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("test");

  useEffect(() => {
    setIsLoading(false);
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { title } = user;
        setUser(title);
        setIsLoading(false);
        console.log(user);
      })
      .catch((error) => setIsError(true));
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  return <div>{user}</div>;
};
export default MultipleReturns;
