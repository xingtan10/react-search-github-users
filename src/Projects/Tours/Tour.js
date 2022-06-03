import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(name);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="=tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read More"}
        </button>
        <Button
          primary
          className="delete-btn"
          content="not interested"
          onClick={() => removeTour(id)}
        />
      </footer>
    </article>
  );
};

export default Tour;
