import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node runtime

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const address = String(form.get("address") || "");
    const message = String(form.get("message") || "");

    // Collect photos
    const files = form.getAll("photos") as File[];
    const attachments = await Promise.all(files.slice(0,5).map(async (f) => ({
      filename: f.name || "photo.jpg",
      content: Buffer.from(await f.arrayBuffer()),
      contentType: f.type || "image/jpeg",
    })));

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `SinghStates Website <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to same hidden gmail
      subject: `New Inquiry from ${name} (${phone})`,
      text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}

Message:
${message}`,
      html: `<div style="font-family:system-ui,Segoe UI,Arial">
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}<br/>
           <b>Phone:</b> ${phone}<br/>
           <b>Email:</b> ${email}<br/>
           <b>Address:</b> ${address}</p>
        <p>${message.replace(/\n/g,"<br/>")}</p>
      </div>`,
      attachments,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err:any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Failed" }, { status: 500 });
  }
}
