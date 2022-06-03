import ModalBox from "./Modal";
import { useReducer, useState } from "react";
import { data } from "./data";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: true,
  modalContent: "hello world",
};
const Main = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = useState(data);
  const [showModal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.isModalOpen);
    console.log(state.people);
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      // setModal(true);
      // console.log({ name });
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div>
      {state.isModalOpen && (
        <ModalBox closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Last Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>

        <Button type="submit">Add</Button>
      </Form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <Button
              primary
              content="Remove id"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default Main;
