import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, phone, destination, number, date, notes } = req.body;

  if (!name || !email || !phone || !destination) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nilevibetours@gmail.com",
      pass: "ioot ieku ltsi pzuk", // الـ App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nile Vibe Tours" <nilevibetours@gmail.com>`,
      to: "nilevibetours@gmail.com",
      subject: "New User Registered",
      html: `
        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 12px; font-family: Arial, sans-serif; border: 1px solid #eee;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="YOUR_LOGO_URL_HERE" alt="Logo" style="width: 120px; height: auto;" />
          </div>
          <h2 style="color: #0B1E36; text-align: center; margin-bottom: 25px;">
            New Booking Submitted
          </h2>
          <div style="background: #F8F1E5; border-left: 4px solid #CBA135; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong>Destination:</strong> ${destination}</p>
            <p style="margin: 8px 0;"><strong>Number of People:</strong> ${number}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong>Notes:</strong> ${notes}</p>
          </div>
          <p style="text-align: center; color: #555; font-size: 14px;">
            This message was generated automatically from your booking form.
          </p>
          <div style="text-align: center; margin-top: 25px;">
            <a href="https://nilevibetours.com" 
              style="background: #CBA135; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-size: 14px;">
              Visit Website
            </a>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Nile Vibe Tours" <nilevibetours@gmail.com>`,
      to: email,
      subject: "Booking Successful",
      html: `
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 12px; font-family: Arial, sans-serif; border: 1px solid #eee;">
        <h2 style="color: #0B1E36; text-align: center; margin-bottom: 20px;">
          Thank You, ${name}!
        </h2>
        <p style="font-size: 15px; color: #444; line-height: 1.6;">
          Your booking for <strong>${destination}</strong> on 
          <strong>${date}</strong> has been successfully received.
          Our team will reach out to you soon with more details.
        </p>
        <h3 style="color: #CBA135; margin-top: 25px;">Booking Details</h3>
        <div style="background: #F8F1E5; border-left: 4px solid #CBA135; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 8px 0;"><strong>Number of People:</strong> ${number}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 8px 0;"><strong>Notes:</strong> ${notes}</p>
        </div>
        <p style="text-align: center; color: #555; font-size: 14px;">
          Thank you for choosing Nile Vibe Tours!
        </p>
        <div style="text-align: center; margin-top: 25px;">
          <a href="https://nilevibetours.com"
            style="background: #CBA135; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-size: 14px;">
            Visit Website
          </a>
        </div>
      </div>
      `,
    });
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending emails", error });
  }
}
