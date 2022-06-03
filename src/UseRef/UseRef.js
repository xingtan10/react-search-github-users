import { useRef } from "react";
import { Container, Form, Checkbox, Button } from "semantic-ui-react";

const UseRef = () => {
  const refCon = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Button type="submit" primary>
              Submit
            </Button>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};
export default UseRef;
