import { NextResponse } from "next/server";
import { jobSeekerSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = jobSeekerSchema.parse(body);

    // TODO: Send email to recruiting team or save to database
    console.log("[Job seeker application]", data);

    return NextResponse.json({ success: true, message: "Application received" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
