const express = require("express");
cors = require("cors");
const db = require("./src/utils/databse");
const Todo = require("./src/models/todos.model");
const todosRoutes = require("./src/routes/todos.routes");

Todo;

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

db.sync()
  .then(() => {
    console.log("Synchronized database.");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.use(todosRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my server.");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
