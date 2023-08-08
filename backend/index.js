import express from "express";
import collection from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
const port = process.env.PORT || 8000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  collection.find({}).then(function (allDetails) {
    res.json({ allDetails });
  });
});

app.post("/add", async (req, res) => {
  const { product_id, brand, model, img_url, price, quantity, total_price } =
    req.body;
  const data = {
    product_id: product_id,
    brand: brand,
    model: model,
    img_url: img_url,
    price: price,
    quantity: quantity,
    total_price: total_price,
  };
  await collection
    .insertMany([data])
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
});

app.post("checkProductId/:product_id", async (req, res) => {
  await collection
    .find({ product_id: req.body.product_id })
    .then(function (count) {
      res.json({ count });
    });
});

app.put("/addQuantity/:id", async (req, res) => {
  const { _id, value, price } = req.body;
  await collection
    .updateMany(
      { _id: _id.toString() },
      { $set: { quantity: value + 1, total_price: price * (value + 1) } }
    )
    .then(res.json(`Obect with id ${_id} removed`));
});

app.put("/subQuantity/:id", async (req, res) => {
  const { _id, value, price } = req.body;
  await collection
    .updateMany(
      { _id: _id.toString() },
      { $set: { quantity: value - 1, total_price: price * (value - 1) } }
    )
    .then(res.json(`Obect with id ${_id} removed`));
});

app.put("/remove/:id", async (req, res) => {
  const { _id } = req.body;
  await collection
    .findByIdAndRemove({ _id: _id.toString() })
    .then(res.json(`Obect with id ${_id} removed`));
});

app.listen(port, () => {
  console.log("port connected at " + port);
});
