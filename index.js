if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const multer = require("multer");
const methodOverride = require("method-override");
const Assignment = require("./models/assignment");
const cors = require("cors");
const mongoose = require("mongoose");
const { storage } = require("./cloudinary/index");
const upload = multer({ storage });
const dbUrl = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//mongodb://localhost:27017/assignments
console.log(dbUrl);
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Seeds: Mongo Connected! :)");
  })
  .catch((err) => {
    console.log("Seeds: Mongo Connected in error :(");
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/test", (req, res) => {
  const test = [
    {
      find: 1,
    },
  ];

  res.json(test);
});

app.get("/data", async (req, res) => {
  const assn = await Assignment.find({});
  console.log(assn);
  res.json(assn);
});

app.get("/send", async (req, res) => {
  res.redirect(
    "https://res.cloudinary.com/luchen/image/upload/v1642012049/groupSixAssn/twjyakkfibpybm3n6vsj.pdf"
  );
});

app.post("/assignmentPDF", upload.single("pdf"), async (req, res, next) => {
  console.log("hit!!");
  const assignment = { ...req.body.assignment };
  if (req.file) {
    assignment.link = req.file.path;
  }

  console.log(assignment);

  // const assn = await Assignment.findOneAndUpdate(
  //   {
  //     title: assignment.title,
  //     fileType: assignment.fileType,
  //   },
  //   { ...assignment }
  // );
  // await assn.save();

  // console.log(assn);
  res.redirect("http://localhost:3000/");
});

app.listen("2000", () => {
  console.log("listenning");
});
