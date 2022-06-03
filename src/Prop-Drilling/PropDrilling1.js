import { useState } from "react";
import { Button } from "semantic-ui-react";
import { data } from "../data";
const PropDrilling1 = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <div>
      PropDrilling1
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};
export default PropDrilling1;

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Button content="remove Person" onClick={() => removePerson(id)} />
    </div>
  );
};
