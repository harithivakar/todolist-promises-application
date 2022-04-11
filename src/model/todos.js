const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    todo: String,
    status: String
});

const todo = mongoose.model("todos",todolistSchema);

module.exports = todo;