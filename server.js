const express = require("express");
const app = express();
const PORT = 5000;
let data = require("./data");
app.use(express.json());

app.get("/items", (req, res) => {
  res.send(data);
});

app.get("/items/:id", (req, res) => {
  const foundItem = data.find((item) => item.id === +req.params.id);
  res.send(foundItem);
});

app.put("/items/:id", (req, res) => {
  const newArray = data.map((item) => {
    if (item.id === +req.params.id) {
      return { id: item.id, ...req.body };
    } else {
      return item;
    }
  });
  data = newArray;
  res.send(req.body);
});

app.delete("/items/:id", (req, res) => {
  const filteredArray = data.filter((item) => item.id !== +req.params.id);
  data = filteredArray;
  res.sendStatus(204);
});

app.post("/", (req, res) => {
  res.send("POST request to route /");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
