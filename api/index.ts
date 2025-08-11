import express from "express";
import serverless from "serverless-http";
import { sendFeedback } from "../src/controllers/feedback.controller";

const app = express();
app.use(express.json());

// rutas
app.post("/send-feedback", sendFeedback);

export default serverless(app);