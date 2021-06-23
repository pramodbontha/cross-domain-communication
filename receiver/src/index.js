import PromiseWindow from "promise-window";

window.showOpenWindow = function showOpenWindow() {
  let newPromiseWindow = new PromiseWindow("http://localhost:3000");

  const shoppingCartData = {
    domId: "footprinttech-app",
    customerId: "1245",
    apiKey: "32sd32rdr43434",
    shopType: "shopware",
    articleNumber: "SW10016",
    articleName: "SW10016",
  };

  let targetWindow = newPromiseWindow.open();
  let childWindow = newPromiseWindow._window.window;
  window.setTimeout(() => {
    childWindow.postMessage({ shoppingCartData }, "http://localhost:3000");
    childWindow.focus();
  }, 1000);
  targetWindow.then(function (data) {
    console.log(data);
  });
};
