import transporter from "../config/mailer.js";

export const sendFeedback = async (req, res) => {
  console.log("sendFeedback");
  const { feedback, satisfaction, improvementSelection } = req.body;

  if (!feedback || feedback.trim() === "") {
    return res.status(400).json({ message: "Empty feedback" });
  }

  const formattedImprovements =
    improvementSelection && improvementSelection.length > 0
      ? improvementSelection.join(", ")
      : "Not specified";
  console.log("tete2", req.body);

  // const emailBody = `
  //   📩 New Feedback Received:

  //   📝 Feedback: ${feedback}

  //   ⭐ Satisfaction level: ${satisfaction ?? "Not specified"}

  //   💡 Areas for improvement: ${formattedImprovements}
  //   `;

  const emailBody = `
  <p>Hello Developer Team,</p>
  <p>I would like to share some feedback about the Pollenscience Mobile app.</p>
  <p><strong>Feedback:</strong><br>${feedback}</p>
  <p>Thank you for your attention.</p>
`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New feedback from Pollenscience Mobile",
      html: emailBody,
    });
    res.json({ message: "Feedback sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email." });
  }
};
