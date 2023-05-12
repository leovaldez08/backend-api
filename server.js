const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const courses = JSON.parse(fs.readFileSync("./courses.json", "utf8"));

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/psup", (req, res) => {
  const psup = courses.find((course) => course.course === "psup");
  if (psup) {
    res.json(psup);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
