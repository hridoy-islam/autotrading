import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextResponse } from "next/server";
import GetStartedEmail from "@/emails/GetStartedEmail";

const resend = new Resend("re_NukXA7Ue_7RT297d6J7sVtGmBGLvwtMaY");
export async function POST(req: Request) {
  const { name, email, phone, city, country, message } = await req.json();
  await resend.emails.send({
    from: "mailing@robofxtrader.com",
    to: email,
    subject: "Auto Trade FX",
    react: ContactEmail({ name }),
  });

  await resend.emails.send({
    from: "mailing@robofxtrader.com",
    to: "ahasan2k@gmail.com",
    subject: "Auto Trade FX",
    react: GetStartedEmail({
      name,
      email,
      phone,
      city,
      country,
      message,
    }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
