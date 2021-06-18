import "./App.css";
import React, { useState } from 'react';
import * as postRobot from 'post-robot'

function App() {
  const [message, setmessage] = useState('');
  const sendMessage = () => {
    let urlString = window.location.href;
    let url = new URL(urlString);
    const shoppingCartData = {
      message: message,
      customerId: url.searchParams.get('customerId'),
      apiKey: url.searchParams.get('apiKey'),
      shopType: url.searchParams.get('shopType'),
      articleNumber: url.searchParams.get('articleNumber'),
    }
    postRobot
      .send(window.opener, "getUser", shoppingCartData)
      .catch(function (err) {
        console.error(err);
      });
    setTimeout(()=>{window.close();},1000)
    
  };


  return (
    <div className="App">
      <input onChange={(e)=>{setmessage(e.target.value)}}/>
      <button onClick={(e) => sendMessage()}>Send Button</button>
    </div>
  );
}

export default App;
