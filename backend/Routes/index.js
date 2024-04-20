const router = require('express').Router();
const User = require("../models/1.User");

router.post("/register-user", async (req, res) => {
  const {name, email, password, mobile } = req.body;

  const newUser = new User({ name, email, password, mobile });

  // save the user to the database
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.status(500).json({ message: "Error registering the user!" });
    });
});

const createToken = (userId) => {
    // Set the token payload
    const payload = {
      userId: userId,
    };
  
    // Generate the token with a secret key and expiration time
    const token = jwt.sign(payload, "Q$r2K6W8n!jCW%Zk", { expiresIn: "1h" });
  
    return token;
  };

  router.post("/login-user", (req, res) => {
    const { email, password } = req.body;
  
    //check if the email and password are provided
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email and the password are required" });
    }
  
    //check for that user in the database
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          //user not found
          return res.status(404).json({ message: "User not found" });
        }
  
        //compare the provided passwords with the password in the database
        if (user.password !== password) {
          return res.status(404).json({ message: "Invalid Password!" });
        }
  
        const token = createToken(user._id);
        res.status(200).json({ token });
      })
      .catch((error) => {
        console.log("error in finding the user", error);
        res.status(500).json({ message: "Internal server Error!" });
      });
  });

  router.get("/users/:userId", (req, res) => {
    const loggedInUserId = req.params.userId;
  
    User.find({ _id: { $ne: loggedInUserId } })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        console.log("Error retrieving users", err);
        res.status(500).json({ message: "Error retrieving users" });
      });
  });

  router.get("/all-communities", async (req, res) =>{
    console.log("this is working")
    const data = {
        communities: [
            {
            name: "Community 1",
            description: "This is the first community",
            members: 100,
            },
            {
            name: "Community 2",
            description: "This is the second community",
            members: 200,
            },
            {
            name: "Community 3",
            description: "This is the third community",
            members: 300,
            },
        ],
        };
     return res.send(data);
});

module.exports = router;