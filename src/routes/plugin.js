import express from "express";
import {
  GET_ALL_PLUGINS,
  INSERT_PLUGIN,
  GET_PLUGIN_BY_ID,
} from "../controllers/plugin.js";

const router = express.Router();

router.get("/plugins", GET_ALL_PLUGINS);
router.get("/plugins/:id", GET_PLUGIN_BY_ID);
router.post("/plugins", INSERT_PLUGIN);

export default router;
