const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema ({
    name: {type: String, required: true, minlength: 1, maxlength: 20},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('TodoTask', toDoSchema);