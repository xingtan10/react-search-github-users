import { useState } from "react";
import data from "./data.js";
import SingleQuestions from "./Question.js";

const AppAccordion = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((questions) => {
            return <SingleQuestions key={questions.id} {...questions} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default AppAccordion;
