"use client";

import { useState, useEffect } from "react";
import { Loader2, Save } from "lucide-react";
import Swal from "sweetalert2";

export default function EditVisionToVenture() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    titlePrefix: "",
    titleHighlight: "",
    description: "",
    videoUrl: "",
  });

  // Fetch existing data
  useEffect(() => {
    fetch("/api/content/visionToVenture")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setFormData(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Vision To Venture data", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/content/visionToVenture", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Section updated successfully.",
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
          <h1 className="text-3xl font-bold text-slate-900">
            Vision to Venture
          </h1>
          <p className="text-slate-500">
            Update the &quot;From Vision to Venture&quot; section.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-indigo-600 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description
          </label>
          <textarea
            rows={5}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            YouTube Video URL or ID
          </label>
          <input
            type="text"
            value={formData.videoUrl}
            onChange={(e) =>
              setFormData({ ...formData, videoUrl: e.target.value })
            }
            placeholder="e.g., https://youtu.be/r2nfZB5Q5Bs or r2nfZB5Q5Bs"
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none font-mono text-sm"
          />
          <p className="text-xs text-slate-400 mt-2">
            Determines the video displayed and the thumbnail used.
          </p>
        </div>
      </div>
    </div>
  );
}
