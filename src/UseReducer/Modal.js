import { Button, Header, Image, Modal } from "semantic-ui-react";
import { useEffect, useState } from "react";

const ModalBox = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  const [open, setOpen] = useState(false);
  return (
    <h1>{modalContent}</h1>
    // <Modal
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    //   open={open}
    //   trigger={<Button>Show Modal</Button>}
    // >
    //   <Modal.Header>Select a Photo</Modal.Header>
    //   <Modal.Content image>
    //     {" "}
    //     <Modal.Description>
    //       <Header>Default Profile Image</Header>
    //       <p>{modalContent}</p>
    //       <p>Is it okay to use this photo?</p>
    //     </Modal.Description>
    //   </Modal.Content>
    //   <Modal.Actions>
    //     <Button color="black" onClick={() => setOpen(false)}>
    //       Nope
    //     </Button>
    //     <Button
    //       content="Yep, that's me"
    //       labelPosition="right"
    //       icon="checkmark"
    //       onClick={() => setOpen(false)}
    //       positive
    //     />
    //   </Modal.Actions>
    // </Modal>
  );
};
export default ModalBox;
