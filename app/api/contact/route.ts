import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Validate environment variables first
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENT_EMAIL'];
    const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);
    
    if (missingEnvVars.length > 0) {
      console.error('Missing required environment variables:', missingEnvVars);
      return NextResponse.json(
        { success: false, message: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    const missingFields: string[] = [];
    if (!firstName) missingFields.push('First Name');
    if (!lastName) missingFields.push('Last Name');
    if (!email) missingFields.push('Email Address');
    if (!message) missingFields.push('Message');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });



    // Email content
    const mailOptions = {
      from: '"MP3 Multisystems Koncept" <' + process.env.SMTP_USER + '>',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3 style="font-family: Arial, sans-serif; color: #1a1b4b;">New Contact Form Submission</h3>
        <p style="font-family: Arial, sans-serif; color: #333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="font-family: Arial, sans-serif; color: #333;"><strong>Email:</strong> ${email}</p>
        <p style="font-family: Arial, sans-serif; color: #333;"><strong>Message:</strong></p>
        <p style="font-family: Arial, sans-serif; color: #333;">${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
