const express = require("express");
// const { Products } = require("../models/products");
const Product = require("../models/product");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("ok");
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Product.findById(id));
});
router.get("/:category", async (req, res) => {
  console.log(req.params.category);
  const { category } = req.params;
  console.log(category);
  try {
    const { products } = await Product.find({ category: category });
    res.json({ products });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
