
let Todo = require('../models/Todo');
const express = require('express');
const router = express.Router();

// Create a new todo
router.post('/api/todos', async (req, res) => {
    try {
      const { description, completed } = req.body;
      const newTodo = new Todo({ description, completed });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error adding todo' });
    }
  });

  module.exports = router;