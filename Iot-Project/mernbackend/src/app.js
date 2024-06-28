
const express = require("express");
const app = express();
require("./db/conn"); // Assuming this connects to your database
const path = require("path");
const hbs = require("hbs");

const User = require("./models/feedback");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../tempaltes/views");
const partials_path = path.join(__dirname, "../tempaltes/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Parses form data

app.use(express.static(static_path)); // Serves static files from the public directory

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index"); // Render the index template for the root path
});

app.post("/feedback", async (req, res) => {
  try {
    const registerUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      feedback: req.body.feedback,
    });

    const feedback = await registerUser.save();
    // Success response - Choose one option:
    // - Send JSON message
    res.status(201).json({ message: 'Registration successful!' });

    // - Redirect to confirmation page
    // res.redirect('/success');

  } catch (error) {
    // Handle error, send user-friendly message and optionally log the error
    console.error(error);
    res.status(400).send("Registration failed. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Server is started at port : ${port}`);
});
