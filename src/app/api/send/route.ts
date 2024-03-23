import { NextResponse } from "next/server";
import { Resend } from "resend";
//import { AirbnbReviewEmail } from "../../../components/email";
import { EmailTemplate } from "../../../components/email";

//AirbnbReviewEmail to put back in the code
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const { name, email, message } = JSON.parse(req.body);

    const { data } = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: "🎉New submission from your website!",
      react: EmailTemplate({ name, email, message }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
