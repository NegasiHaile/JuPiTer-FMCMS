const mongoose = require('mongoose')

const userTasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('userTasks', userTasksSchema);