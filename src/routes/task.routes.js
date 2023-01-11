const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json({
        status: 200,
        message: "API Working",
        body: tasks
    })
});

router.get("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json({
        status: 200,
        message: "API Working",
        body: task
    })
});

router.post("/", async (req, res) => {
    const {tittle, description} = req.body;
    const newTask = new Task({tittle, description});
    await newTask.save();
    res.json({
        status: 200,
        message: "Task created"
    });
});

router.put("/:id", async (req, res) => {
    const {tittle, description} = req.body;
    const newTask = {tittle, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status: 200,
        message: "Task Updated"
    });
});

router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 200,
        message: "Task Deleted"
    });
});

module.exports = router;