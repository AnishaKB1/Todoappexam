const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const tododata= require('../model/todo');
const router = express.Router();

router.get('/todos', async (req, res) => {
    try {
        const todos = await tododata.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/todos', async (req, res) => {
    const { description, status } = req.body;

    try {
        const newTodo = new tododata({ description, status });
        const data= await newTodo.save();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
       const data= await tododata.findByIdAndDelete(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router;