import { useState, useEffect } from "react";

export function NewComp() {
  const [count, updateCount] = useState(1);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Count: (${count})`;
  });
  const increment = () => {
    updateCount(count+1);
  }
    return ( 
    <div>
        <div>Count: ({count})</div>
        <button onClick={increment}>Click</button>
        </div>
    )
}

export default NewComp;
