import React, { useState } from "react";

import data from "./services/birthDayService";
import List from "./components/List";

import "./App.css";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
