// Middleware for handling auth
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

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

    const user = await Admin.findOne({ token: token });

    if (!user) {
      return res.status(401).json({ msg: "Only Admin Allowed" });
    }

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

module.exports = adminMiddleware;
