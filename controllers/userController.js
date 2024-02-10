const todo = require('../models/todoModels');

const fetchTodos = async (req, res) => {
    try {
        const data = await todo.find({})
        res.status(200).json({data});
    } catch (error) {
        console.error("Error occurred while fetching todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const addTodo = async (req, res) => {
    try {
        const name = req.body.inputValue
        if (!name) {
            return res.status(400).json({ message: "Invalid request. Todo is required." });
        }
        await todo.create({name})
        res.status(200).json({ message: "Todo added successfully" });
    } catch (error) {
        console.error("Error occurred while adding todo:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteTodo = async (req,res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: "Invalid request. Todo ID is required." });
        }
        await todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

const updateTodo = async (req,res) => {
    try {
        const {todoId,editValue} = req.body
        if (!todoId || !editValue) {
            return res.status(400).json({ message: "Invalid request. Todo ID and edit value are required." });
        }
        await todo.updateOne({ _id: todoId },{ name: editValue });
        res.status(200).json({ message: "Todo updated successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

const changeTodoStatus = async (req,res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: "Invalid request. Todo ID is required." });
        }
        await todo.updateOne({ _id: id },{ status: false });
        res.status(200).json({ message: "Todo marked to completed" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    changeTodoStatus
}