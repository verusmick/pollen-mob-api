import { Request, Response } from "express";
import transporter from "../config/mailer";

interface FeedbackRequestBody {
  feedback: string;
  satisfaction: number;
  improvementSelection: string[];
}

export const sendFeedback = async (req: Request, res: Response) => {
  const { feedback, satisfaction, improvementSelection } =
    req.body as FeedbackRequestBody;

  if (!feedback || feedback.trim() === "") {
    return res.status(400).json({ message: "Empty feedback" });
  }
  const formattedImprovements =
    improvementSelection && improvementSelection.length > 0
      ? improvementSelection.join(", ")
      : "Not specified";
  const emailBody = `
    📩 New Feedback Received:

    📝 Feedback: ${feedback}

    ⭐ Satisfaction level: ${satisfaction ?? "Not specified"}

    💡 Areas for improvement: ${formattedImprovements}
    `;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Feedback from the App",
      text: emailBody,
    });
    res.json({ message: "Feedback sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email." });
  }
};
