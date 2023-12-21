const { Router } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");
const { Admin, Course } = require("../db");
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

const courseDetails = zod.object({
  title: zod
    .string()
    .min(3, "Minum 3 word required")
    .max(100, "Course name should be less then 100"),
  description: zod
    .string()
    .min(3, "Minum 3 word required")
    .max(100, "Course description should be less then 100"),
  price: zod.number(),
  imageLink: zod
    .string()
    .startsWith("https://", { message: "Must provide secure URL" }),
});

// Admin Routes
router.post("/signup", async (req, res) => {
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

    const user = await Admin.findOne({ username: username });
    if (user) {
      return res.status(404).json({ msg: "User Alredy Exist in Db" });
    }

    const newUser = new Admin({
      username: username,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    await newUser.save();

    res.status(200).json({ msg: "Admin created successfully" });
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

    const adminDoc = await Admin.findOne({ username: username });
    if (!adminDoc) {
      return res.status(404).json({ msg: "User Dosen't find in Db" });
    }

    const passOk = bcrypt.compareSync(password, adminDoc.password);

    if (!passOk) {
      return res.status(422).json("Password Don't Match");
    }

    const token = jwt.sign({ username, role: "admin" }, process.env.SECRET, {
      expiresIn: "24h",
    });
    //put token in cookie
    //res.cookie("token", token, { expire: new Date() + 9999 });

    //saving token in Db
    adminDoc.token = token;
    await adminDoc.save();

    return res
      .status(200)
      .json({ message: "Admin LoggedIn successfully", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const parsedInput = courseDetails.safeParse(req.body);

    if (!parsedInput || !parsedInput.data) {
      return res.status(401).json({
        msg: parsedInput?.error?.issues[0]?.message || "Invalid input",
      });
    }

    const title = parsedInput.data.title;
    const description = parsedInput.data.description;
    const price = parsedInput.data.price;
    const imageLink = parsedInput.data.imageLink;

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

    // getting course id from db
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
