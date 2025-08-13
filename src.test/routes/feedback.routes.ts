import { Router } from "express";
import { sendFeedback } from "../controllers/feedback.controller";

const router = Router();

router.post("/send-feedback", sendFeedback);

export default router;
