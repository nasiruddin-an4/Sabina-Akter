"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function NewsList({ initialNews }) {
  const [news, setNews] = useState(initialNews);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/news/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setNews(news.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your article has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete article.", "error");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Something went wrong.", "error");
      }
    }
  };

  if (news.length === 0) {
    return (
      <div className="p-12 text-center text-slate-500">
        <p className="mb-4">No news articles found.</p>
        <Link
          href="/admin/news/add"
          className="text-orange-600 font-medium hover:underline"
        >
          Create your first article
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="p-6 font-semibold text-slate-700">Image</th>
            <th className="p-6 font-semibold text-slate-700">Title</th>
            <th className="p-6 font-semibold text-slate-700">Date</th>
            <th className="p-6 font-semibold text-slate-700 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {news.map((item) => (
            <tr
              key={item._id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="p-6 w-32">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-slate-200 border border-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="p-6 max-w-xs">
                <p className="font-bold text-slate-900 line-clamp-1 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.summary}
                </p>
              </td>
              <td className="p-6 text-sm text-slate-600 whitespace-nowrap font-medium font-mono">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="p-6 text-right">
                <div className="flex items-center justify-end gap-3">
                  {/* Edit functionality handling */}
                  {/* For now since we don't have edit page, prevent navigation/alert */}
                  <Link
                    href="#" // Placeholder
                    onClick={(e) => {
                      e.preventDefault();
                      Swal.fire(
                        "Info",
                        "Edit feature coming soon (modify Add impl)",
                        "info",
                      );
                    }}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
