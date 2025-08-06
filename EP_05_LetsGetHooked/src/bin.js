import { useState } from "react";
 
export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);  //means it get to async
    setCount((prevCount) => prevCount + 1);  //funcion
    console.log("Clicked count:", count);  // Logs OLD value
  }

  return <button onClick={increment}>Count: {count}</button>;
}
