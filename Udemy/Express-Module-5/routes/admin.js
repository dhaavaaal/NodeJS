const path = require("path");
const express = require("express");
const process = require("process");

const router = express.Router();

const rootDir = require("../utils/path");

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send(
  // '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  //   );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log(rootDir, process.mainModule);
  res.redirect("/");
});

module.exports = router;
