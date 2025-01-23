const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    todo: [
      {
        username: { type: String, required: true },
        taskTitle: { type: String, required: true },
        associated: { type: String, required: true },
        progress: { type: Number, required: true }, 
        assignDate: { type: Date, required: true },
      }
    ],
    inProgress: [
      {
        username: { type: String, required: true },
        taskTitle: { type: String, required: true },
        associated: { type: String, required: true },
        progress: { type: Number, required: true },  
        assignDate: { type: Date, required: true },
      }
    ],
    done: [
      {
        username: { type: String, required: true },
        taskTitle: { type: String, required: true },
        associated: { type: String, required: true },
        progress: { type: Number, required: true },  
        assignDate: { type: Date, required: true },
      }
    ],
  }, { timestamps: true });
  

const TaskList = mongoose.model('TaskList', taskSchema);

module.exports = TaskList;
