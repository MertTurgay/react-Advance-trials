import { useState } from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearList = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: '2rem' }} onClick={clearList}>
        clear items
      </button>
    </div>
  );
};

export default ReducerBasics;