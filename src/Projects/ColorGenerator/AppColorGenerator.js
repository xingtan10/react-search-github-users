import { useState } from "react";
import { Placeholder } from "semantic-ui-react";
import Values from "values.js";
import SingleColor from "./SingleColor.js";

const AppColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ff2").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </div>
  );
};
export default AppColorGenerator;
