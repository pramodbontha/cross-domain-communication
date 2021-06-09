import "./App.css";
import * as postRobot from 'post-robot'

function App() {
  const sendMessage = () => {
    let urlString = window.location.href;
    let url = new URL(urlString);
    const shoppingCartData = {
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
  };


  return (
    <div className="App">
      <button onClick={(e) => sendMessage()}>Send Button</button>
    </div>
  );
}

export default App;
