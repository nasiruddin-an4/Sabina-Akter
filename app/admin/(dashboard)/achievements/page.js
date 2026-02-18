"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function EditAchievements() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    roles: [],
    achievements: [],
  });

  // Fetch existing data
  useEffect(() => {
    fetch("/api/content/achievements")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          // Ensure arrays exist even if empty
          setFormData({
            roles: data.data.roles || [],
            achievements: data.data.achievements || [],
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load achievements data", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/content/achievements", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Achievements updated successfully.",
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

  // Helper to update a specific item in an array
  const updateItem = (section, index, field, value) => {
    setFormData((prev) => {
      const newArray = [...prev[section]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  };

  // Helper to add a new item
  const addItem = (section) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        section === "roles"
          ? { title: "", organization: "", period: "", description: "" }
          : { title: "", organization: "", year: "" },
      ],
    }));
  };

  // Helper to remove an item
  const removeItem = (section, index) => {
    setFormData((prev) => {
      const newArray = [...prev[section]];
      newArray.splice(index, 1);
      return { ...prev, [section]: newArray };
    });
  };

  if (loading)
    return (
      <div className="p-8 text-center text-slate-500">Loading content...</div>
    );

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Professional Achievements
          </h1>
          <p className="text-slate-500">
            Manage professional roles and awards timeline.
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

      {/* Professional Roles Section */}
      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-800">
            Professional Roles
          </h2>
          <button
            onClick={() => addItem("roles")}
            className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-md transition-colors"
          >
            <Plus size={16} /> Add Role
          </button>
        </div>

        <div className="space-y-6">
          {formData.roles.length === 0 && (
            <p className="text-center text-slate-400 py-4 italic">
              No roles added yet.
            </p>
          )}
          {formData.roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 relative group"
            >
              <button
                onClick={() => removeItem("roles", idx)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove Role"
              >
                <Trash2 size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Title / Position
                  </label>
                  <input
                    type="text"
                    value={role.title}
                    onChange={(e) =>
                      updateItem("roles", idx, "title", e.target.value)
                    }
                    placeholder="e.g. Chairperson"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={role.organization}
                    onChange={(e) =>
                      updateItem("roles", idx, "organization", e.target.value)
                    }
                    placeholder="e.g. Betopia Group"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Period
                </label>
                <input
                  type="text"
                  value={role.period}
                  onChange={(e) =>
                    updateItem("roles", idx, "period", e.target.value)
                  }
                  placeholder="e.g. 2018 - Present"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={role.description}
                  onChange={(e) =>
                    updateItem("roles", idx, "description", e.target.value)
                  }
                  placeholder="Brief description of the role..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-800">
            Awards & Recognition
          </h2>
          <button
            onClick={() => addItem("achievements")}
            className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-md transition-colors"
          >
            <Plus size={16} /> Add Award
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.achievements.length === 0 && (
            <div className="col-span-full">
              <p className="text-center text-slate-400 py-4 italic">
                No achievements added yet.
              </p>
            </div>
          )}
          {formData.achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-lg border border-slate-200 relative group"
            >
              <button
                onClick={() => removeItem("achievements", idx)}
                className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove Award"
              >
                <Trash2 size={16} />
              </button>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Award Title
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      updateItem("achievements", idx, "title", e.target.value)
                    }
                    placeholder="e.g. Business Leader Award"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={item.organization}
                    onChange={(e) =>
                      updateItem(
                        "achievements",
                        idx,
                        "organization",
                        e.target.value,
                      )
                    }
                    placeholder="e.g. Global Summit"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={item.year}
                    onChange={(e) =>
                      updateItem("achievements", idx, "year", e.target.value)
                    }
                    placeholder="e.g. 2023"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
