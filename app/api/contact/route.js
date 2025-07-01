import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, phoneNumber, businessEmail, aboutProject } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Business Email:</strong> ${businessEmail}</p>
        <p><strong>About Project:</strong></p>
        <p>${aboutProject.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
} 