import express from "express";
import {
  TodoAdd,
  getTodo,
  TodoUpdate,
  TodoDelete,
} from "../controller/Todo.controller.js";

const router = express.Router();

router.post("/add", TodoAdd);
router.get("/get", getTodo);
router.put("/update/:id", TodoUpdate);
router.delete("/delete/:id", TodoDelete);

export default router;
