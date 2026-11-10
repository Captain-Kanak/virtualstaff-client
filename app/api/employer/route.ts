import { NextResponse } from "next/server";
import { employerSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = employerSchema.parse(body);

    // TODO: Send email to hiring team or save to database
    console.log("[Employer application]", data);

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
