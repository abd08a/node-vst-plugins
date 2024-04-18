import express from "express";
import {
  GET_ALL_PLUGINS,
  INSERT_PLUGIN,
  GET_PLUGIN_BY_ID,
  GET_ALL_USER_PLUGINS,
  DELETE_PLUGIN_BY_ID,
} from "../controllers/plugin.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/plugins", GET_ALL_PLUGINS);
router.get("/plugins/user", auth, GET_ALL_USER_PLUGINS);
router.get("/plugins/:id", GET_PLUGIN_BY_ID);
router.post("/plugins", auth, INSERT_PLUGIN);
router.delete("/plugins/:id", auth, DELETE_PLUGIN_BY_ID);

export default router;
