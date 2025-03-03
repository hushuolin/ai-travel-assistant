import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    console.log("Received query:", query); // ✅ Debugging log

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: query }],
    });

    console.log("AI Response:", response.choices[0].message.content); // ✅ Debugging log

    return NextResponse.json({ message: response.choices[0].message.content });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
