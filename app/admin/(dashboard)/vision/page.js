"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, Upload } from "lucide-react";
import Swal from "sweetalert2";
import Image from "next/image";

export default function EditVision() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    visionTag: "",
    titlePrefix: "",
    titleHighlight: "",
    titleSuffix: "",
    description: "",
    count: 30,
    backgroundImage: "",
  });

  // Fetch existing data
  useEffect(() => {
    fetch("/api/content/vision")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setFormData(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load vision data", err);
        setLoading(false);
      });
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      Swal.fire({
        title: "Uploading...",
        text: "Please wait while we upload your image.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const res = await fetch("/api/upload", { method: "POST", body: data });
      const json = await res.json();

      if (json.success) {
        setFormData((prev) => ({ ...prev, backgroundImage: json.url }));
        Swal.fire({
          icon: "success",
          title: "Uploaded!",
          text: "Image uploaded successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "Could not upload image.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong during upload.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/content/vision", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // Use logic to dynamically revalidate specific key in API
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Vision section updated successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to update content.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while saving.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="p-8 text-center text-slate-500">Loading content...</div>
    );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Vision Section</h1>
          <p className="text-slate-500">
            Update the Vision 2030 section content and imagery.
          </p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-70"
        >
          {saving ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Save size={20} />
          )}
          Save Changes
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-8">
        {/* Background Image Upload */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Background Image
          </label>
          <div className="flex items-start gap-6">
            <div className="relative w-48 h-32 bg-slate-950 rounded-lg overflow-hidden border border-slate-200">
              {formData.backgroundImage ? (
                <Image
                  src={formData.backgroundImage}
                  alt="Vision Background"
                  fill
                  className="object-cover opacity-60"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  No Image
                </div>
              )}
            </div>
            <div>
              <input
                type="file"
                id="vision-image"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="vision-image"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-700 font-medium hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <Upload size={16} /> Change Image
              </label>
              <p className="text-xs text-slate-400 mt-2 max-w-xs">
                Recommended: Dark themed or high contrast image.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Vision Tag (e.g., Vision 2030)
            </label>
            <input
              type="text"
              value={formData.visionTag}
              onChange={(e) =>
                setFormData({ ...formData, visionTag: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Target Count (e.g., 30)
            </label>
            <input
              type="number"
              value={formData.count}
              onChange={(e) =>
                setFormData({ ...formData, count: Number(e.target.value) })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title Prefix
            </label>
            <input
              type="text"
              value={formData.titlePrefix}
              onChange={(e) =>
                setFormData({ ...formData, titlePrefix: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Highlight Text
            </label>
            <input
              type="text"
              value={formData.titleHighlight}
              onChange={(e) =>
                setFormData({ ...formData, titleHighlight: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-teal-600 font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title Suffix
            </label>
            <input
              type="text"
              value={formData.titleSuffix}
              onChange={(e) =>
                setFormData({ ...formData, titleSuffix: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
