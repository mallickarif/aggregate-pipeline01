const Product = require("../models/product.model.js");
const Category = require("../models/category.model.js");
const mongoose = require('mongoose');
const connectDB = require("../db/index.js");


Product.aggregate([
  {
    $lookup: {
      from: "categories",
      localField: "category._id",
      foreignField: "_id",
      as: "category",
    },
  },
  {
    $unwind: "$category",
  },
  {
    $project: {
      _id: 1,
      name: 1,
      price: 1,
      category: "$category.name",
    },
  },
],
)
.then((result) => {
  console.log("Aggregation result:", result);
})
.catch((error) => {
  console.error("Error performing aggregation:", error);
});
