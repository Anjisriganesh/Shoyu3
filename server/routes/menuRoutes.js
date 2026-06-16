import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new menu item
router.post("/", async (req, res) => {
  try {
    const menuItem = await Menu.create(req.body);

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;