import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setmessage] = useState("");
  const [shoppingCartData, setShoppingCartData] = useState();

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        console.log(event.data);
        if (event.origin !== "http://localhost:3002") return;
        setShoppingCartData(event.data);
        // ...
      },
      false
    );
  }, []);

  const sendMessage = () => {
    window.opener.postMessage(
      { message, ...shoppingCartData },
      "http://localhost:3002"
    ); // (1)
  };

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setmessage(e.target.value);
        }}
      />
      <button onClick={(e) => sendMessage()}>Send Button</button>
    </div>
  );
}

export default App;
