import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Veg",
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;