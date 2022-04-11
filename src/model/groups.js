const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    }
});

const groups = mongoose.model("groups",groupSchema);

module.exports = groups;