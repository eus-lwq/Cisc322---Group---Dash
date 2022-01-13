if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const multer = require("multer");
const methodOverride = require("method-override");
const Assignment = require("./models/assignment");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { storage } = require("./cloudinary/index");
const upload = multer({ storage });
const dbUrl = process.env.DB_URL;
const _CODE = process.env.EV_CODE;

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
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const whitelist = [
  "http://localhost:2000",
  "http://localhost:3000",
  "http://dash322.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

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

app.get("/send/:code", async (req, res) => {
  const { code } = req.params;
  console.log(code);
  result = { verified: true };
  console.log(_CODE);
  if (code != _CODE) {
    console.log(code != _CODE);
    result.verified = false;
  }
  res.send(result);
});

app.post("/assignmentPDF", upload.single("pdf"), async (req, res, next) => {
  console.log("hit!!");

  const asstemp = { ...req.body.assignment };
  console.log(asstemp);
  const assnOb = {
    title: asstemp.title,
  };
  if (req.file) {
    console.log("yes");
    if (asstemp.fileType === "slide") {
      assnOb.linkOfSlide = req.file.path;
    } else if (asstemp.fileType === "report") {
      assnOb.linkOfReport = req.file.path;
    }
  }

  console.log(assnOb);

  const assn = await Assignment.findOneAndUpdate(
    {
      title: assnOb.title,
    },
    { ...assnOb }
  );
  await assn.save();

  console.log(assn);
  res.redirect("/");
  return;
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
