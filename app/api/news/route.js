import dbConnect from "@/lib/db";
import News from "@/models/News";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    const newsItem = await News.create(data);

    return NextResponse.json(
      { success: true, data: newsItem },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function GET() {
  await dbConnect();
  const news = await News.find({}).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: news });
}
