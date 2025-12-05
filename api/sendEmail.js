import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, phone, destination, number, date, notes } = req.body;

  if (!name || !email || !phone || !destination) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // إعداد الـ transporter لـ Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nilevibetours@gmail.com",
      pass: "ioot ieku ltsi pzuk", // الـ App Password
    },
  });

  try {
    // 1️⃣ إيميل ليك
    await transporter.sendMail({
      from: `"Nile Vibe Tours" <nilevibetours@gmail.com>`,
      to: "nilevibetours@gmail.com", // لو تحب تبعت لنفسك
      subject: "New User Registered",
      html: `
        <h3>New Booking Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Number of People:</strong> ${number}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    });

    // 2️⃣ إيميل للمستخدم
    await transporter.sendMail({
      from: `"Nile Vibe Tours" <nilevibetours@gmail.com>`,
      to: email,
      subject: "Booking Successful",
      html: `
        <h3>Thank you, ${name}!</h3>
        <p>Your booking for <strong>${destination}</strong> on <strong>${date}</strong> has been successfully received.</p>
        <p>We will contact you soon for further details.</p>
        <p>Booking Details:</p>
        <ul>
          <li>Number of people: ${number}</li>
          <li>Phone: ${phone}</li>
          <li>Notes: ${notes}</li>
        </ul>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending emails", error });
  }
}
