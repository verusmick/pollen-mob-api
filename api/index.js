const express = require("express");
const { sendFeedback } = require("../src/controllers/feedback.controller");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("app.get");
  res.send("Express App Responded");
});

app.post("/test", async (req, res) => {
  console.log("app.post(");
  if (req.method === "POST") {
    // For POST requests, req.body contains the parsed JSON
    // await sendFeedback(req, res);
    sendFeedback(req, res);
  } else {
    //     res.status(405).send("Method Not Allowed");
  }
});

app.listen(process.env.PORT || 3000);

module.exports = app;
