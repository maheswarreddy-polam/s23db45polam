const { Double } = require("mongodb")
const mongoose = require("mongoose")
const eagleSchema = mongoose.Schema({
    eagle_NAME: {
        type: String,
        required: true
    },
    eagle_AGE: {
        type: Number,
        required: true
    },
    eagle_COLOR: {
        type: String,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("eagle", 
eagleSchema)