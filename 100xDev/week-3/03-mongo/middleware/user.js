const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  try {
    const username = req.headers.username;
    const password = req.headers.password;
    if (!username || !password) {
      return res
        .status(404)
        .json({ msg: "Send username and password in the headers" });
    }
    const VerifiedAdmin = await User.findOne({
      username: username,
      password: password,
    });

    if (!VerifiedAdmin) {
      res.status(401).send("Unauthorized");
      return;
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = userMiddleware;
