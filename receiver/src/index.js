import * as postRobot from "post-robot";

(function () {
  postRobot.on("getUser", function (event) {
    // Have it return some data to the calling window
    console.log(event.data);
  });
})();
