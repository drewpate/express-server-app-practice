const express = require("express");
const app = express();
const PORT = 5000;
const itemsRouter = require("./routes/items-route");

app.use(express.json());

app.use("/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
