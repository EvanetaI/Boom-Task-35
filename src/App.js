import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, updateCount] = useState(1);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Count: (${count})`;
  });
  const increment = () => {
    updateCount(count+1);
  }
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
          <div>
        <div>Count: ({count})</div>
        <button onClick={increment}>Click</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
