const express = require('express')
const userRouter = express.Router()
const {
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    changeTodoStatus
} = require('../controllers/todoController');

userRouter
.get('/fetchTodos',fetchTodos)
.post('/addTodo',addTodo)
.delete('/deleteTodo/:id',deleteTodo)
.patch('/updateTodo',updateTodo)
.put('/changeTodoStatus/:id',changeTodoStatus)

module.exports = userRouter