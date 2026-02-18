import mongoose from "mongoose";

const PageContentSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true, // e.g., 'hero', 'about', 'vision'
    },
    data: {
      type: mongoose.Schema.Types.Mixed, // Allows flexible JSON structure per section
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.PageContent ||
  mongoose.model("PageContent", PageContentSchema);
