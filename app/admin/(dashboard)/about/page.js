"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

import Swal from "sweetalert2";

export default function EditAbout() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    badge: "",
    titlePrefix: "",
    titleHighlight: "",
    quote: "",
    quoteAuthor: "",
    paragraphs: [],
    stats: [],
  });

  // Fetch existing data
  useEffect(() => {
    fetch("/api/content/about")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setFormData(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load about data", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/content/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "About section updated successfully.",
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

  const handleParagraphChange = (idx, val) => {
    const updated = [...formData.paragraphs];
    updated[idx] = val;
    setFormData({ ...formData, paragraphs: updated });
  };

  const addParagraph = () => {
    setFormData({ ...formData, paragraphs: [...formData.paragraphs, ""] });
  };

  const removeParagraph = (idx) => {
    const updated = formData.paragraphs.filter((_, i) => i !== idx);
    setFormData({ ...formData, paragraphs: updated });
  };

  const handleStatChange = (idx, field, val) => {
    const updated = [...formData.stats];
    updated[idx] = { ...updated[idx], [field]: val };
    setFormData({ ...formData, stats: updated });
  };

  if (loading)
    return (
      <div className="p-8 text-center text-slate-500">Loading content...</div>
    );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">About Section</h1>
          <p className="text-slate-500">
            Edit your bio, mission statement, and statistics.
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
        {/* Headings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Badge Text
            </label>
            <input
              type="text"
              value={formData.badge}
              onChange={(e) =>
                setFormData({ ...formData, badge: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
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
              Highlight
            </label>
            <input
              type="text"
              value={formData.titleHighlight}
              onChange={(e) =>
                setFormData({ ...formData, titleHighlight: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-orange-600 font-medium"
            />
          </div>
        </div>

        {/* Paragraphs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-slate-700">
              Biography Paragraphs
            </label>
            <button
              type="button"
              onClick={addParagraph}
              className="text-xs font-semibold text-orange-600 flex items-center gap-1 hover:underline"
            >
              <Plus size={14} /> Add Paragraph
            </button>
          </div>

          <div className="space-y-4">
            {formData.paragraphs.map((p, idx) => (
              <div key={idx} className="flex gap-3">
                <textarea
                  rows={2}
                  value={p}
                  onChange={(e) => handleParagraphChange(idx, e.target.value)}
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <button
                  onClick={() => removeParagraph(idx)}
                  className="text-slate-400 hover:text-red-500 p-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Mission Quote
            </label>
            <textarea
              rows={2}
              value={formData.quote}
              onChange={(e) =>
                setFormData({ ...formData, quote: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Quote Author/Source
            </label>
            <input
              type="text"
              value={formData.quoteAuthor}
              onChange={(e) =>
                setFormData({ ...formData, quoteAuthor: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        {/* Stats */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-4">
            Key Statistics
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 border border-slate-200 rounded-lg"
              >
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1 block uppercase">
                    Value
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) =>
                      handleStatChange(idx, "value", e.target.value)
                    }
                    className="w-full font-bold text-slate-900 border-b border-slate-200 focus:border-orange-500 outline-none pb-1"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1 block uppercase">
                    Label
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    readOnly
                    className="w-full text-slate-600 bg-transparent border-b border-dashed border-slate-200 pb-1 cursor-not-allowed"
                    title="Icons are mapped to labels in code, so changing labels might break icons. Contact dev to change labels."
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2 italic">
            Note: Stat labels are currently fixed to maintain icon mapping.
          </p>
        </div>
      </div>
    </div>
  );
}
