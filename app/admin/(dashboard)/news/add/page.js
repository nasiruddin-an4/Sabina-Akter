"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Loader2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

export default function AddNews() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    summary: "",
    content: "",
    externalLink: "",
    image: null, // This will hold the file object
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.image) {
        Swal.fire("Warning", "Please select an image", "warning");
        setLoading(false);
        return;
      }

      Swal.fire({
        title: "Publishing...",
        text: "Uploading image and saving article.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // 1. Upload Image to Cloudinary via our API
      const uploadFormData = new FormData();
      uploadFormData.append("file", formData.image);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      });

      if (!uploadRes.ok) throw new Error("Image upload failed");

      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.url;

      // 2. Save News Item to MongoDB
      // We need a server action or API route for this.
      // For simplicity, let's create a general API route for news creation.
      const newsRes = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          date: formData.date,
          summary: formData.summary,
          content: formData.content,
          externalLink: formData.externalLink,
          image: imageUrl,
        }),
      });

      if (newsRes.ok) {
        Swal.fire({
          icon: "success",
          title: "Published!",
          text: "News article has been published.",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push("/admin/news");
        });
      } else {
        throw new Error("Failed to save news article");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/admin/news"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-4"
        >
          <ArrowLeft size={16} /> Back to News
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Add New Article</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 space-y-8"
      >
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Article Image
          </label>
          <div className="flex items-center gap-6">
            <div
              className={`relative w-40 h-40 rounded-xl overflow-hidden border-2 border-dashed ${imagePreview ? "border-transparent" : "border-slate-300"} bg-slate-50 flex items-center justify-center group`}
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <ImageIcon className="text-slate-400" size={32} />
              )}
            </div>
            <div>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="image-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors shadow-sm font-medium"
              >
                <Upload size={16} />
                Choose Image
              </label>
              <p className="text-xs text-slate-400 mt-2">
                Recommended: JPG, PNG. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter article title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Date
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              External Link (Optional)
            </label>
            <input
              type="url"
              value={formData.externalLink}
              onChange={(e) =>
                setFormData({ ...formData, externalLink: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="https://..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Summary
            </label>
            <textarea
              required
              rows={3}
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Brief overview of the article..."
            />
          </div>

          {/* Detailed Content - For now just a textarea, ideally a rich text editor */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Content
            </label>
            <textarea
              rows={8}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="Write the full article content here..."
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Publishing...
              </>
            ) : (
              "Publish Article"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
