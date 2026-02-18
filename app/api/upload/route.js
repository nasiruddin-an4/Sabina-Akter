import { v2 as cloudinary } from "cloudinary";

// Cloudinary config is automatically loaded from env vars by the library if named correctly,
// but we already set it in lib/cloudinary.js so we can import from there if we wanted to customize.
// However, the standard way to use it in API routes is just to import cloudinary.

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return Response.json(
      { success: false, message: "No file uploaded" },
      { status: 400 },
    );
  }

  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Upload to Cloudinary
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", folder: "sabina-akter" },
        (error, result) => {
          if (error) {
            reject(Response.json({ success: false, error }, { status: 500 }));
          } else {
            resolve(Response.json({ success: true, url: result.secure_url }));
          }
        },
      )
      .end(buffer);
  });
}
