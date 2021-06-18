import * as postRobot from "post-robot";

(function () {
  postRobot.on("getUser", function (event) {
    // Have it return some data to the calling window
    console.log(event.data);
    var el = document.getElementById("messages");
    el.innerHTML = JSON.stringify(event.data);
  });
})();
