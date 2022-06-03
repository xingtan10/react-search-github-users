import { createContext, useContext, useState } from "react";
import { Button } from "semantic-ui-react";
import { data } from "../data";

const PersonContext = createContext();

//two components = Provider, Consumer

const UseContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <div>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </div>
  );
};
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div>
      <h1>{name}</h1>
      <Button content="remove Person" onClick={() => removePerson(id)} />
    </div>
  );
};

export default UseContextApi;
