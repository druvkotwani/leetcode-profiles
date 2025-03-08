import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
  regions: ["iad1"], // specify a single region
};

// This defines a schedule for running once a week (Sunday at 00:00 UTC)
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Set the cron schedule to run monthly (1st day of each month at midnight)
export const maxDuration = 300; // 5 minute maximum duration
export const schedule = { cron: "0 0 1 * *" }; // Monthly at midnight on the 1st day

export async function GET(request: NextRequest) {
  try {
    const secretKey = process.env.SYNC_SECRET_KEY || "your-default-secret-key";

    // Call our sync API
    const syncResponse = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
      }/api/syncAllProfiles?secretKey=${secretKey}`,
      { method: "GET" }
    );

    const result = await syncResponse.json();

    if (!result.success) {
      console.error("Sync failed:", result);
      return NextResponse.json(
        { message: "Weekly sync failed", error: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Weekly sync completed successfully",
      result,
    });
  } catch (error) {
    console.error("Error during scheduled sync:", error);
    return NextResponse.json(
      { message: "Error during weekly sync", error },
      { status: 500 }
    );
  }
}
