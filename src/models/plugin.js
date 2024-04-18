import mongoose from "mongoose";

const pluginSchema = mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  developer: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

export default mongoose.model("Plugin", pluginSchema);
