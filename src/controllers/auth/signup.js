import { createToken } from "../../middlewares/auth/createToken.js";
import { User } from "../../models/auth/user.js";



export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check whether the user is already existed or not
    const isUserExist = await User.exists({ username });
    if (isUserExist) {
      res
        .status(400)
        .json({ success: false, message: "username already exist" });
    } else {
      const user = await User.create({
        username: username,
        password: password,
      });
      const token = createToken(user._id)
      res.status(201).json(token);
    }
  } catch (error) {
    if (error.message) {
      res.status(401).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An error occurred during signup" });
    }
  }
};
