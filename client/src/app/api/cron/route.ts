import { NextResponse } from "next/server";

/**
 * This route is called by Vercel Cron Jobs
 * Cron configuration is set in vercel.json at the project root
 * Schedule: Monthly at midnight on the 1st day of each month
 */
export async function GET() {
  try {
    const secretKey = process.env.SYNC_SECRET_KEY || "your-default-secret-key";

    // Call our sync API
    const syncResponse = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://your-app-url.com"
      }/api/syncAllProfiles?secretKey=${secretKey}`,
      { method: "GET" }
    );

    const result = await syncResponse.json();

    if (!result.success) {
      console.error("Sync failed:", result);
      return NextResponse.json(
        { message: "Monthly sync failed", error: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Monthly sync completed successfully",
      result,
    });
  } catch (error) {
    console.error("Error during scheduled sync:", error);
    return NextResponse.json(
      { message: "Error during monthly sync", error },
      { status: 500 }
    );
  }
}
