const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  try {
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
      return res
        .status(404)
        .json({ msg: "Send username and password in the headers" });
    }

    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(401).json({ error: "Username and Passowrd not found" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = adminMiddleware;
