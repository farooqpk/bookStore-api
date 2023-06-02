import { createToken } from "../../middlewares/auth/createToken.js";
import { User } from "../../models/auth/user.js";
import bcrypt from "bcrypt";


export const login = async (req, res) => {
  
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      const isPassCorrect = await bcrypt.compare(password, user.password);

      if (isPassCorrect) {
        const token = createToken(user._id);
        res.status(200).json(token);
      } else {
        res
          .status(400)
          .json({ success: false, message: "password is incorrect" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "username doesnt exist" });
    }
  } 
  
  catch (error) {
    if (error.message) {
      res.status(401).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An error occurred during login" });
    }
  }
};
