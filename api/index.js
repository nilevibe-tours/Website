const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json()); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendRegistrationEmails(userData) {
  const { name, email } = userData;

  const adminMail = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New User Registered",
    html: `
      <h2>New User Registration</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
  };

  const userMail = {
    from: process.env.EMAIL,
    to: email,
    subject: "Registration Successful",
    html: `
      <h2>Welcome, ${name}!</h2>
      <p>Your registration is completed successfully.</p>
      <p>Happy registration!</p>
    `,
  };

  await transporter.sendMail(adminMail);
  await transporter.sendMail(userMail);
}


app.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ error: "Name and Email are required" });

  try {
    await sendRegistrationEmails({ name, email });
    res.status(200).json({ success: true, message: "Emails sent" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Failed to send emails" });
  }
});


module.exports = app;
  