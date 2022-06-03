import { useState } from "react";
import { Button } from "semantic-ui-react";
import data from "../Birthday-Reminder/data.js";
import List from "./List";

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <Button primary content="Clear All" onClick={() => setPeople([])} />
      </section>
    </main>
  );
};
export default BirthdayReminder;
