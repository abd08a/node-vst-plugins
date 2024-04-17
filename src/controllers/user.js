import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";

export const SIGN_IN = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new UserModel({
      id: uuidv4,
      name: req.body.name,
      email: req.body.email,
      password: hash,
      plugins: [],
    });

    const response = await user.save();

    return res.status(200).json({ users: response });
  } catch (err) {
    console.log(err);
  }
};
