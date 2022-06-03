import { useState } from "react";
import { Container, Form, Checkbox, Button } from "semantic-ui-react";

const ControllerInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log(people);
    } else {
      console.log("empty values");
    }
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Add Person</Button>
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
export default ControllerInputs;
