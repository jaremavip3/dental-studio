import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Dental Studio Website <onboarding@resend.dev>",
      to: [`${process.env.EMAIL_TO}`], //`${process.env.EMAIL_TO}`
      subject: "🎉New submission from client!",
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json({
      status: 200,
    });
  } catch (error) {
    return Response.json({ error });
  }
}
