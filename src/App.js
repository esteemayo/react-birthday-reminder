import React, { useState } from 'react';

import data from 'data';
import List from 'components/List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length === 0 ? null : (
          <button onClick={() => setPeople([])}>Clear All</button>
        )}
      </section>
    </main>
  );
}

export default App;
