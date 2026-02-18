"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, MessageSquareQuote } from "lucide-react";
import Swal from "sweetalert2";

export default function EditChairmanMessage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    quote: "",
    name: "",
    title: "",
  });

  // Fetch existing data
  useEffect(() => {
    fetch("/api/content/chairmanMessage")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setFormData(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load chairman message data", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/content/chairmanMessage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Chairman message updated successfully.",
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
            Chairman Message
          </h1>
          <p className="text-slate-500">
            Update the inspirational quote section on the homepage.
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
        {/* Quote Preview */}
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="flex items-start gap-4">
            <MessageSquareQuote
              size={32}
              className="text-orange-500 flex-shrink-0 mt-1"
            />
            <div>
              <p className="text-lg text-slate-700 italic leading-relaxed">
                {formData.quote || "Your quote will appear here..."}
              </p>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                — {formData.name || "Name"}, {formData.title || "Title"}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Quote / Message
          </label>
          <textarea
            rows={5}
            value={formData.quote}
            onChange={(e) =>
              setFormData({ ...formData, quote: e.target.value })
            }
            placeholder="Enter the chairman's message or quote (include quotation marks if desired)"
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"
          />
          <p className="text-xs text-slate-400 mt-2">
            Tip: Include quotation marks at the start and end of your quote for
            proper formatting.
          </p>
        </div>

        {/* Name & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g., Sabina Akter"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title / Position
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g., Chairperson, Betopia Group"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
