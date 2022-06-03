import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const UseEffect1 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 1) {
      console.log("useeffect");
    }
  }, [value]);
  console.log("render com");
  return (
    <div>
      <h1>{value}</h1>
      <Button
        primary
        content="value"
        onClick={() => setValue(value + 1)}
      ></Button>
    </div>
  );
};
export default UseEffect1;
