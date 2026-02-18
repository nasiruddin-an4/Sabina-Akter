import dbConnect from "@/lib/db";
import PageContent from "@/models/PageContent";
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request, { params }) {
  await dbConnect();
  // In Next.js 15+, params is a Promise and must be awaited
  const { key } = await params;

  try {
    const content = await PageContent.findOne({ key });
    if (!content) {
      return NextResponse.json(
        { success: false, message: "Content not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: content.data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  // In Next.js 15+, params is a Promise and must be awaited
  const { key } = await params;

  try {
    const body = await request.json();

    // Upsert the content
    const updated = await PageContent.findOneAndUpdate(
      { key },
      { key, data: body },
      { upsert: true, new: true, runValidators: true },
    );

    // Revalidate all relevant paths to ensure changes reflect immediately
    revalidatePath("/");
    revalidatePath(`/admin/${key}`); // Revalidate the specific admin page if it exists

    return NextResponse.json({ success: true, data: updated.data });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
