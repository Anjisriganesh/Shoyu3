import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {

  const order = await Order.create(req.body);

  res.status(201).json(order);
});

router.get("/", async (req, res) => {

  const orders = await Order.find()
    .populate("user");

  res.json(orders);
});

export default router;