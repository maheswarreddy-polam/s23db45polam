const mongoose = require("mongoose")
const eagleSchema = mongoose.Schema({
NAME: String,
AGE: Number,
COLOR: String,
})
module.exports = mongoose.model("eagle",eagleSchema)