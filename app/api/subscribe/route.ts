import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbzVz86E6OtD-LEHY3uE6zQiRvJHjNIVIB_ziHrUhunzMFxV5EHzW-IzXRta5FvDakUI7A/exec",
    {
      method: "POST",
      headers: {
        // text/plain avoids the browser preflight/CORS issue,
        // and since this call is server-to-server it's even cleaner.
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
    }
  );

  return NextResponse.json({
    success: true,
  });
}