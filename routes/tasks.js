const express = require('express');               //import the express module
const Task = require('../models/Task');            //import the Task module from models folder
const router = express.Router();                 //import the Router 
const methodOverride = require('method-override');

router.use(methodOverride('_method'));



// Get all tasks
//this code helps to fetch all the task from db 
router.get('/tasks', async (req, res) => {
    try {                                        //"/tasks" > tasks api such as "http://localhost:5000/tasks/",helps to get the data
        const tasks = await Task.find();         //responds with status code and the displaying the fetched data
        res.render("index", { tasks }); // Render the EJS template with the tasks data
    } catch (error) {
        res.render("error",{ message: error.message });//error message when the mongo db failes to fetch the data,  500 status code the server error response
    }
});


//get the task by id
// Render the edit form for updating a task
router.get('/tasks/:id/edit', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);  //finds the id to edit
        if (!task) return res.render("error", { message: 'Task not found' });
        res.render('editTask.ejs', { task });             //renders it to the editTask.ejs file in views folder
    } catch (error) {
        res.render("error", { message: error.message });         // if any error it is displayed
    }
});


// Create a new task
router.post('/tasks', async (req, res) => {              //creates a new task
const { title, description, status } = req.body;         //this is the data we get from request body
    if (!title)                                          //if the title is empty , it shows warning message to enter the title
        return res.render("error", {message : "Please enter the title"})
    const task = new Task({                    //else if everything is ok, 
        title,
        description,
        status,
    });
    try {
        const newTask = await task.save();       //gets saved into the database
        res.redirect('/tasks')          //directs to the primary page
    } catch (error) {
        res.render("error" ,{ message: error.message }); //handles error if any
    }
});

// Update an existing task
router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            updated_at: Date.now(),
        }, { new: true });
        if (!updatedTask) return res.render("error", { message: 'Task not found' });
        res.redirect('/tasks');
    } catch (error) {
        res.render("error", { message: error.message });
    }
});

// // Delete a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id); // finds the task to delete through id
        if (!task) return res.render("error", { message: "Task not found" });   // returns this line if task not found
        res.redirect('/tasks');          //after deleting the , it directs to the main page
    } catch (error) {
        res.render("error", { message: error.message });  //error if any
    }
});
module.exports = router; //modules are exported
