import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { firstname, lastname, email, subject, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ritkastudios@gmail.com',
      replyTo: email,
      subject: subject || 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
