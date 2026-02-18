import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    summary: {
      type: String,
      required: [true, "Please provide a summary"],
    },
    content: {
      type: String,
      required: [false, "Content is optional for now"],
    },
    image: {
      type: String,
      required: [true, "Please upload an image"],
    },
    date: {
      type: String,
      required: [true, "Please provide a date"],
    },
    externalLink: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.models.News || mongoose.model("News", NewsSchema);
