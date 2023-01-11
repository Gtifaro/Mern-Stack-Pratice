const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/mern-tasks";

mongoose.set('strictQuery', true);
mongoose.connect(URI).then(db => console.log("DB connected")).catch(err => console.error(err));
module.exports = mongoose;