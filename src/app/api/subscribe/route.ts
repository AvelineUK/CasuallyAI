import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Buttondown API
    const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

    if (!BUTTONDOWN_API_KEY) {
      console.error("BUTTONDOWN_API_KEY not set");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.buttondown.com/v1/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          type: "regular",
        }),
      }
    );

    if (response.ok || response.status === 201) {
      return NextResponse.json({ success: true });
    }

    // Handle already subscribed
    if (response.status === 409) {
      return NextResponse.json({ success: true });
    }

    const data = await response.json();
    console.error("Buttondown error:", data);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
