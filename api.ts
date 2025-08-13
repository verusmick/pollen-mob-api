import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

// root page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pollen API</h1>");
});

// test endpoint
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from API" });
});

export default serverless(app);