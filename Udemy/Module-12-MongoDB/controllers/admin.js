const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("req", req.body);
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  console.log("product", product);
  product
    .save()
    .then((result) => {
      // console.log("res", res);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
  // Product.create({
  //   title: title,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  // userId: req.user.id,
  //   })
  //     .then(() => res.redirect("/admin/products"))
  //     .catch((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   req.user
//     .getProducts({ where: { id: prodId } })
//     // Product.findByPk(prodId)
//     .then((products) => {
//       const product = products[0];
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDescription = req.body.description;

//   Product.findByPk(prodId)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.description = updatedDescription;
//       product.imageUrl = updatedImageUrl;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("Update Product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// const updatedProduct = new Product(
//   prodId,
//   updatedTitle,
//   updatedImageUrl,
//   updatedDescription,
//   updatedPrice
// );
// res.redirect("/admin/products");

// updatedProduct.save();
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.params.productId;
// Product.destroy({ where: { id: prodId } });
// Product.findByPk(prodId)
//   .then((product) => product.destroy())
//   .then(() => res.redirect("/admin/products"))
//   .catch((err) => console.log(err));
// res.redirect("/admin/products");
// };

// exports.getProducts = (req, res, next) => {
//   req.user
//     .getProducts()
// Product.findAll()
// .then((products) => {
//   res.render("admin/products", {
//     prods: products,
//     pageTitle: "Admin Products",
//     path: "/admin/products",
//   });
// })
// .catch((err) => console.log(err));
// Product.fetchAll((products) => {
//   res.render("admin/products", {
//     prods: products,
//     pageTitle: "Admin Products",
//     path: "/admin/products",
//   });
// });
// };
