import express from "express";
import serverless from "serverless-http";
// import { sendFeedback } from "../src/controllers/feedback.controller";

const app = express();
app.use(express.json());

// this will be available at /api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pollen API</h1>");
});

// test endpoint /api/hello
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from API" });
});

// POST — will be available at /api/send-feedback
// app.post("/send-feedback", async (req, res) => {
//   try {
//     await sendFeedback(req, res);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal server error");
//   }
// });

export default serverless(app);
