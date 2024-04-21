require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const PORT = 4000 || process.env.PORT;
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Connect to MongoDB
mongo.connect(process.env.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

// Define routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const route1 = require("./Routes/index");
app.use("/", route1);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});