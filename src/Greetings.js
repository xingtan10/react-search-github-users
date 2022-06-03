import { useState } from "react";
import { Button } from "semantic-ui-react";
import { data } from "./useEffect and Map/data";

const Greetings = () => {
  const [text, setText] = useState("test123");
  const [toggle, setToggle] = useState(false);
  const [people, setPeople] = useState(data);
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "hi",
  });

  console.log(person);

  const onClick = () => {
    if (toggle) {
      setText("false");
      setToggle(false);
    } else {
      setText("true");
      setToggle(true);
    }
    console.log(toggle);
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const changeMessage = () => {
    setPerson({ ...person, message: "hilosd" });
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            {name}
            <Button content="Remove" onClick={() => removeItem(id)}></Button>
          </div>
        );
      })}
      {text}
      <Button content="Primary" primary onClick={onClick} />
      <Button content="Clear" primary onClick={() => setPeople([])}></Button>
      <Button content="Change Message" primary onClick={changeMessage}></Button>
      <h1>{person.name}</h1>
      <h1>{person.message}</h1>
    </div>
  );
};
export default Greetings;
