import jwt from "jsonwebtoken";

export const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: "48h",
  });
};
