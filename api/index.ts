import express from "express";
import serverless from "serverless-http";
import { sendFeedback } from "../src/controllers/feedback.controller";

const app = express();
app.use(express.json());

// Root page for /api
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Pollen API</title></head>
      <body>
        <h1>Welcome to Pollen API</h1>
        <p>Try sending POST requests to <code>/send-feedback</code></p>
      </body>
    </html>
  `);
});

// POST route for feedback
app.post("/send-feedback", sendFeedback);

export default serverless(app);