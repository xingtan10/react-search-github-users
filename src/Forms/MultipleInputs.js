import { useState } from "react";
import { Container, Form, Checkbox, Button } from "semantic-ui-react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    console.log(person);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "" });
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={person.firstName}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={person.email}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit" onClick={handleSubmit}>
            Add Person
          </Button>
          {people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div key={id}>
                {firstName}
                {email}
              </div>
            );
          })}
        </Form>
      </Container>
    </div>
  );
};
export default MultipleInputs;
