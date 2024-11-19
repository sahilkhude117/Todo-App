const mongoose = require("mongoose");
const MONGO_URL = require("../backend/config")

mongoose.connect("mongodb+srv://sahilkhude11:LBh801uQVDNOqRUM@mongo-cluster.am4oa.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}