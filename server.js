import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import TodoRouter from "./routes/Todo.routes.js";
import TodoDB from "./db/Todo.db.js";

import path from "path";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use("/", TodoRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}

app.listen(PORT, () => {
  TodoDB;
  console.log(`Server is running on port ${PORT}`);
});
