import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional(),
  phone: z.string().trim().min(7).max(40),
  email: z.email().max(160),
  subject: z.string().trim().min(3).max(180),
  message: z.string().trim().min(10).max(3000),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Please check the form fields and try again." }, { status: 400 });
  }

  console.info("Brinker contact inquiry", parsed.data);

  return NextResponse.json({ ok: true, message: "Thanks. Your message has been received." });
}
