// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would:
    // 1. Validate the data
    // 2. Send an email (e.g., using Nodemailer or Resend)
    // 3. Save the data to a database
    
    console.log("Form Submission Received:", body);

    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "An error occurred." }, { status: 500 });
  }
}