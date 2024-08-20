import TodoModel from "../models/Todo.model.js";

export const TodoAdd = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const existingTask = await TodoModel.findOne({ title });
  if (existingTask) {
    return res.status(400).json({ message: "Task already exists" });
  }

  const newTask = new TodoModel({ title });
  await newTask.save();
  res.status(200).json({ message: "Task added successfully" });
};

export const getTodo = async (req, res) => {
  const getTask = await TodoModel.find();
  res.status(200).json(getTask);
};

export const TodoUpdate = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const existingTask = await TodoModel.findOne({ title });
  if (existingTask) {
    return res.status(400).json({ message: "Task already exists" });
  }

  try {
    const updateTask = await TodoModel.findByIdAndUpdate(id, { title });
    console.log(updateTask);
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const TodoDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteList = await TodoModel.findByIdAndDelete(id); // Add 'await' here
    if (!deleteList) {
      return res.status(404).json({ message: "Task not found" }); // Handle the case where the task doesn't exist
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
