const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    name: {
        type: String,
        required: [true, "Name is required!!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!!"],
    },
    mobile: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongo.model("Users", userSchema);