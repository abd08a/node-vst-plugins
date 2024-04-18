import { v4 as uuidv4 } from "uuid";
import PluginModel from "../models/plugin.js";

export const GET_ALL_PLUGINS = async (req, res) => {
  try {
    const plugins = await PluginModel.find();

    return res.status(200).json({ plugins: plugins });
  } catch (err) {
    console.log(err);
  }
};

export const GET_PLUGIN_BY_ID = async (req, res) => {
  try {
    const plugins = await PluginModel.findOne({ id: req.params.id });

    return res.status(200).json({ plugins: plugins });
  } catch (err) {
    console.log(err);
  }
};

export const INSERT_PLUGIN = async (req, res) => {
  try {
    const plugin = new PluginModel({
      id: uuidv4(),
      userId: req.body.userId,
      developer: req.body.developer,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
    });

    const response = await plugin.save();

    return res
      .status(200)
      .json({ plugin: response, message: "plugin was added successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const GET_ALL_USER_PLUGINS = async (req, res) => {
  try {
    const plugins = await PluginModel.find({ userId: req.body.userId });

    if (!plugins.length) {
      return res
        .status(404)
        .json({ message: "this user does not have any plugins" });
    }

    return res.status(200).json({ plugins: plugins });
  } catch (err) {
    console.log(err);
  }
};

export const DELETE_PLUGIN_BY_ID = async (req, res) => {
  try {
    const plugin = await PluginModel.findOne({ id: req.params.id });

    if (plugin.userId !== req.body.userId) {
      return res
        .status(401)
        .json({ message: "this plugin does not belong to you" });
    }

    const response = await PluginModel.deleteOne({ id: req.params.id });

    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
  }
};
