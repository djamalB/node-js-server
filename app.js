const express = require("express");
const app = express();
const port = 3000;

// Промежуточное ПО (middleware) для обработки JSON-запросов
app.use(express.json());

// Роут для / (любой метод)
app.all("/", (req, res) => {
  res.send("Hello world");
});

// Роут для /users (GET)
app.get("/users", (req, res) => {
  const users = ["user1", "user2", "user3"];
  res.json(users);
});

// Роут для /users (POST)
app.post("/users", (req, res) => {
  res.send("Юзер добавлен");
});

// Роут для /users/:id (DELETE)
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Юзер с ID ${userId} удален`);
});

// Роут для /users/:id (PATCH)
app.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Юзер с ID ${userId} изменен`);
});

// Роут для /admin (любой метод)
app.all("/admin", (req, res) => {
  res.send("Не хватает прав доступа");
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
