require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../db");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(404).json({ msg: "No token found re-login" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(409).json({ msg: "Yor Token dosent match wow !" });
      }
      req.user = user;
      // next();
    });

    const user = await User.findOne({ token: token });

    const tokenInDb = user.token;

    if (tokenInDb != token) {
      return res.status(401).json({ msg: "Only Admin Allowed" });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
