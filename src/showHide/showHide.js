import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button content="Click" primary onClick={() => setShow(!show)} />
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>{size}</h2>
    </div>
  );
};

export default ShowHide;
