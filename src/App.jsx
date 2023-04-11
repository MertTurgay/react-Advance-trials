import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Starter from './tutorial/11-performance/starter/01-lower-state';
import Navbar from './tutorial/09-context-api/starter/Navbar'
import Final from './tutorial/10-useReducer/final/01-useReducer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      {/*<Navbar /> */}
      <Starter />
      {/*<Final />*/}
    </div>
  );

  /*  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
  */
}

export default App;
