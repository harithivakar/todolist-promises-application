const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
    listName: {
        type: String,
        required: true
    },
    listType: {
        type: String,
        required: true
    }
});

const list = mongoose.model("lists",listSchema);

module.exports = list;