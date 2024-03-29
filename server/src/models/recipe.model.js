import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  previousVersions: [{ type: Object, default: {}, required: false }]
});

export const Recipe = mongoose.model("Recipe", RecipeSchema);
