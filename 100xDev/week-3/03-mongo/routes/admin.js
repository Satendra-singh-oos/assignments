const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  try {
    const admin = new Admin({ username: username, password: password });

    await admin.save();

    return res.status(200).json({ msg: "Admin created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, imageLink } = req.body;

    const course = new Course({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
      published: true,
    });

    if (!course) {
      return res.status(404).json({ msg: "Unable to create course" });
    }
    await course.save();

    const courseId = course._id;

    return res
      .status(200)
      .json({ msg: "Course created successfully", courseId: courseId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  try {
    const allCourse = await Course.find();

    res.json({ allCourse });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server error" });
  }
});

module.exports = router;
