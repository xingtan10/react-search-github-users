import { useEffect, useState } from "react";

const UseEffectSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("use Effect");
    return () => {
      console.log("use effect return");
    };
  });
  return (
    <div>
      <h2>{size}</h2>
    </div>
  );
};

export default UseEffectSize;
