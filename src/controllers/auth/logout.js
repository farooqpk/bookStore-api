import { BlacklistedToken } from "../../models/blacklist/blacklist.js";

export const logout = async (req, res) => {
    
  try {

    const token = req.headers.authorization;
    await BlacklistedToken.create({ token });
    res.status(200).json({ success: true });


  } catch (error) {
    if (error.message) {
      res.status(401).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An error occurred during logout" });
    }
  }
};
