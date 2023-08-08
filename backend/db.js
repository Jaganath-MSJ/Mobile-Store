import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URL, connectionParams)
  .then(() => {
    console.info("Connected to database ");
  })
  .catch(console.log(`Error connecting to the database.`));

const newSchema = new mongoose.Schema({
  product_id: {
    type: Number,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  img_url: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  total_price: {
    type: Number,
  },
});

const collection = mongoose.model("cart", newSchema);
export default collection;
