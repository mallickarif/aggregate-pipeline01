const Category = require("../models/category.model.js");
const Product = require("../models/product.model.js");
const mongoose = require("mongoose");
const connectDB = require("../db/index.js");

connectDB()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

 const newCategory = new Category.insertMany([
  { name: "Electronics", description: "Electronic gadgets and devices"},
  { name: "Clothing", description: "Winter and summer colection"},
])
newCategory.save()
.then((Category) => {
    console.log("Category saved", Category);
})
.catch((err) => {
    console.log("error", err);
})

const newProduct = new Product.insertMany([
    { name: "Smartphone", price: 500, category: categories._id },
    { name: "Laptop", price: 1000, category: categories._id },
    { name: "T-shirt", price: 20, category: categories._id },
    { name: "Jeans", price: 50, category: categories._id },
]
);

return newProduct.save()
.then((Product) => {
  console.log("Products saved:", Product);
})
.catch((err) => {
  console.error("error", err);
});
