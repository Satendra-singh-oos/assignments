const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageLink: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
