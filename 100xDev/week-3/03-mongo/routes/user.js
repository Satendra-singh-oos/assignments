const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    const user = new User({ username: username, password: password });

    await user.save();

    return res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
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
  try {
    const courseId = req.params.courseId;

    const course = Course.findOne({ _id: courseId });

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
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({ username: username, password: password });

    if (!user) {
      return res.status(401).json({ msg: "No user found" });
    }

    const course = await Course.findById(courseId);
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
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({
      username: username,
      password: password,
    }).populate("purchasedCourses");

    if (!user) {
      return res.status(401).json({ msg: "No user found" });
    }

    const allUserCourse = user.purchasedCourses;

    return res.status(200).json({ purchasedCourse: allUserCourse });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

module.exports = router;
