const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const TaskList = require('./model/todo'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/React-todo', {
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });

// Add to todo
app.post('/api/tasks/todo', async (req, res) => {
  console.log("hiiiiii")
  try {
    const { username, taskTitle, associated, progress, assignDate } = req.body;
    const taskDocument = await TaskList.findOne(); 

    if (!taskDocument) {
      const newTask = new TaskList({
        todo: [{ username, taskTitle, associated, progress, assignDate }],
        inProgress: [],
        done: []
      });
      await newTask.save();
      return res.status(201).json({ message: 'Task added to todos successfully!' });
    }

    taskDocument.todo.push({ username, taskTitle, associated, progress, assignDate });
    await taskDocument.save();

    res.status(201).json({ message: 'Task added to todos successfully!' });
  } catch (error) {
    ////console.error('Error adding task to todos:', error);
    res.status(500).json({ message: 'Failed to add task to todos', error });
  }
});

// Add to inprogress
app.post('/api/tasks/inprogress', async (req, res) => {
  console.log(req.body)
  try {
    const {username, taskTitle, associated, progress, assignDate } = req.body;

    let taskDocument = await TaskList.findOne();
    if (!taskDocument) {
      const newTask = new TaskList({
        todo: [],
        inProgress: [{ username, taskTitle, associated, progress, assignDate }],
        done: []
      });
      await newTask.save();
      return res.status(201).json({ message: 'Task added to inprogress successfully!' });
    }

    taskDocument.inProgress.push({ username, taskTitle, associated, progress, assignDate });
    await taskDocument.save();

    res.status(201).json({ message: 'Task added to inprogress successfully!' });
  } catch (error) {
    ////console.error('Error adding task to inprogress:', error);
    res.status(500).json({ message: 'Failed to add task to inprogress', error });
  }
});

// Add to done
app.post('/api/tasks/done', async (req, res) => {
  try {
    const {username, taskTitle, associated, progress, assignDate } = req.body;

    let taskDocument = await TaskList.findOne();
    if (!taskDocument) {
      const newTask = new TaskList({
        todo: [],
        inProgress: [],
        done: [{ username, taskTitle, associated, progress, assignDate }]
      });
      await newTask.save();
      return res.status(201).json({ message: 'Task added to inprogress successfully!' });
    }

    taskDocument.done.push({username, taskTitle, associated, progress, assignDate });
    await taskDocument.save();

    res.status(201).json({ message: 'Task added to done successfully!' });
  } catch (error) {
    ////console.error('Error adding task to done:', error);
    res.status(500).json({ message: 'Failed to add task to done', error });
  }
});

// Get all tasks (GET) - Returns tasks categorized by their status
app.get('/api/tasks', async (req, res) => {
  ////console.log("hiii")
  try {
    const taskList = await TaskList.findOne();
    // console.log("server ne mongo se fetch kia",taskList)

    if (!taskList) {
      return res.status(404).json({ message: 'No tasks found!' });
    }

    res.status(200).json({
      todo: taskList.todo,
      inProgress: taskList.inProgress,
      done: taskList.done,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task by ID (DELETE)
app.delete('/api/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  console.log(taskId);
  try {
   
    const taskList = await TaskList.findOne();
    console.log(taskList)
    if (!taskList) {
      return res.status(404).json({ message: 'Task list not found!' });
    }

    // let todo = taskList.todo;
    // let inProgress = taskList.inProgress;
    // let done = taskList.done;
    // console.log("todo---- :", todo)
    // console.log("inprogress ----:", inProgress)
    // console.log("done---- :", done)


    taskList.todo = todo.filter(task => task._id.toString() !== taskId);
    taskList.inProgress = inProgress.filter(task => task._id.toString() !== taskId);
    taskList.done = done.filter(task => task._id.toString() !== taskId);

    await taskList.save();

    res.json({ message: 'Task deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the task.' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
