import { EmailTemplate } from "../../../../email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log(req.json);
    const { data, error } = await resend.emails.send({
      from: "contact@mail.eugenecode.xyz",
      to: "eugeneokaka@gmail.com",
      replyTo: email,
      subject: "Hello world",
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <h1 style="color: #4f46e5; font-size: 20px; margin-bottom: 16px;">📩 New Contact Message</h1>
      <p style="font-size: 16px; color: #374151; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px; color: #374151; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 16px; color: #374151; margin: 8px 0;"><strong>Message:</strong></p>
      <p style="font-size: 15px; color: #111827; background: #f3f4f6; padding: 12px; border-radius: 6px; white-space: pre-line;">
        ${message}
      </p>
      <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">This email was sent via your portfolio contact form 🚀</p>
    </div>
  </div>
`,

      // react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
