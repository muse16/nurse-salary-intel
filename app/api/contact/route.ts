import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'NurseSalaryIntel Contact Form <onboarding@resend.dev>',
        to: ['support@nursesalaryintel.com'],
        reply_to: email,
        subject: subject ? `[Contact] ${subject}` : '[Contact] Message from NurseSalaryIntel.com',
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Not specified'}\n\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Resend error:', errorBody);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}
