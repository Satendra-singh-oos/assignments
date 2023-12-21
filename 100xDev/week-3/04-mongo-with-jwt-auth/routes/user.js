const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
require("dotenv").config();
const zod = require("zod");
const { Admin, Course, User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

// create coustom checker
const signupDetails = zod.object({
  username: zod.string().min(3).max(20),
  password: zod
    .string()
    .min(4, "Password must be atleast 4 characters")
    .max(10, "Password must be less than 10 characters"),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const parsedInput = signupDetails.safeParse(req.body);

    if (!parsedInput || !parsedInput.data) {
      return res.status(401).json({
        msg: parsedInput?.error?.issues[0]?.message || "Invalid input",
      });
    }

    const username = parsedInput.data.username;
    const password = parsedInput.data.password;

    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(404).json({ msg: "User Alredy Exist in Db" });
    }

    const newUser = new User({
      username: username,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    await newUser.save();
    res.status(200).json({ msg: "User created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  try {
    const parsedInput = signupDetails.safeParse(req.body);

    if (!parsedInput || !parsedInput.data) {
      return res.status(401).json({
        msg: parsedInput?.error?.issues[0]?.message || "Invalid input",
      });
    }

    const username = parsedInput.data.username;
    const password = parsedInput.data.password;

    const userDoc = await User.findOne({ username: username });
    if (!userDoc) {
      return res.status(404).json({ msg: "User Dosen't find in Db" });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (!passOk) {
      return res.status(422).json("Password Don't Match");
    }

    const token = jwt.sign({ username, role: "user" }, process.env.SECRET, {
      expiresIn: "24h",
    });
    //put token in cookie
    //res.cookie("token", token, { expire: new Date() + 9999 });

    //saving token in Db
    // userDoc.token = token;
    // await userDoc.save();

    return res
      .status(200)
      .json({ message: "User LoggedIn successfully", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourse = await Course.find();

    res.json({ allCourse });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

router.get("/courses/:courseId", userMiddleware, async (req, res) => {
  // get course by id
  try {
    const courseId = req.params.courseId;

    const course = await Course.findOne({ _id: courseId });

    if (!course) {
      return res.status(401).json({ msg: "No Course found" });
    }
    return res.status(200).json({ courseById: course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const decodeToken = jwt.decode(token);
    const userName = decodeToken.username;

    const user = await User.findOne({
      username: userName,
    }).populate("purchasedCourses");

    // const user = await User.findOne({ token: token });
    if (!user) {
      return res.status(401).json({ msg: "No user found with these token" });
    }

    const course = await Course.findById({ _id: courseId });
    if (!course) {
      return res.status(401).json({ msg: "No Course found" });
    }

    user.purchasedCourses.push(course);

    await user.save();

    return res.json({
      message: "Course purchased successfully",
      purchasedCourse: course,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const decodeToken = jwt.decode(token);
    const userName = decodeToken.username;

    const user = await User.findOne({
      username: userName,
    }).populate("purchasedCourses");

    if (!user) {
      return res.status(401).json({ msg: "No user found with these token" });
    }

    const allUserCourse = user.purchasedCourses;

    return res.status(200).json({ purchasedCourse: allUserCourse });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

module.exports = router;
