import dbConnect from "@/lib/db";
import News from "@/models/News";
import { NextResponse } from "next/server";

// GET single news item
export async function GET(request, { params }) {
  await dbConnect();
  // In Next.js 15+, params is a Promise
  const { id } = await params;

  try {
    const newsItem = await News.findById(id);
    if (!newsItem) {
      return NextResponse.json(
        { success: false, error: "News item not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: newsItem });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// UPDATE news item
export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const data = await request.json();

  try {
    const newsItem = await News.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!newsItem) {
      return NextResponse.json(
        { success: false, error: "News item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: newsItem });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

// DELETE news item
export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return NextResponse.json(
        { success: false, error: "News item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
