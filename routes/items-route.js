const express = require("express");
const router = express.Router();
const items = require("../data");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ items: [] }).write();

//middleware function
/*const getAllItems = (req, res) => {
  res.send(items);
};

router.get("/", getAllItems);*/

router.get("/", (req, res) => {
  const results = db.get("items").value();
  res.send(results);
});

router.get("/:id", (req, res) => {
  const foundItem = items.find((item) => item.id === +req.params.id);
  res.send(foundItem);
});

router.post("/", (req, res) => {
  const newItem = req.body;
  db.get("items").push(newItem).write();
  res.sendStatus(201);
});

router.put("/:id", (req, res) => {
  const newArray = items.map((item) => {
    if (item.id === +req.params.id) {
      return { id: item.id, ...req.body };
    } else {
      return item;
    }
  });
  items = newArray;
  res.send(req.body);
});

router.delete("/:id", (req, res) => {
  const filteredArray = items.filter((item) => item.id !== +req.params.id);
  items = filteredArray;
  res.sendStatus(204);
});

module.exports = router;
