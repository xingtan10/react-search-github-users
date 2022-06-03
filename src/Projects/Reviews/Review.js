import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

const Review = () => {
  const [index, setIndex] = useState(2);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomPeopleIndex = Math.floor(Math.random() * people.length);
    console.log(randomPeopleIndex);
    if (randomPeopleIndex === index) {
      randomPeopleIndex = index + 1;
    }
    setIndex(checkNumber(randomPeopleIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={prevPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random
      </button>
    </article>
  );
};
export default Review;
