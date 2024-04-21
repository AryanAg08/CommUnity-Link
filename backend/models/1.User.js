const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    Name: {
        type: String,
        required: [true, "Name is required!!"],
    },
    Email: {
        type: String,
        required: [true, "Email is required!!"],
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongo.model("Users", userSchema);