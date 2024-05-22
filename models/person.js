const mongooose = require("mongoose");

const Person = mongooose.model("Person", {
    name: String,
    salary: Number,
    approved: Boolean
});

module.exports = Person;
