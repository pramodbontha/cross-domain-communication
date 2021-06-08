import "./App.css";


function App() {
  const sendMessage = () => {
    var iframe = document.getElementsByTagName('iframe')[0];
    var win;
    try {
        win = iframe.contentWindow;
    } catch(e) {
        win = iframe.contentWindow;
    }
    var obj = {
       name: "Pramod",
       test: "Testing cross domain communication"
    };
    // save obj in subdomain localStorage
    win.postMessage(JSON.stringify({key: 'storage', method: "set", data: obj}), "*");
  };

  window.onbeforeunload = function() {
    window.opener.postMessage('closed', 'http://localhost:3002');
};

  return (
    <div className="App">
      <button onClick={(e) => sendMessage()}>Send Button</button>
    </div>
  );
}

export default App;
