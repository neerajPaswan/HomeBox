import Products from "../Model/product.model.js";

export const addProductSingle = async (req, res) => {
  try {
    const productDetail = req.body;
    const newProduct = new Products({ ...productDetail });
    await newProduct.save();
    res.status(201).json({ message: "data created" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

export const categoryItemHandler = async (req, res) => {
  try {
    let queryObj = req.query;
    let type = queryObj.cat.toLowerCase();
    const categories = [
      "mobiles",
      "fashione",
      "laptops",
      "electronics",
      "jewelery",
      "home",
      "books",
      "beauty",
      "watches",
    ];
    let isExist = categories.includes(type);
    if (!isExist) {
      return res.status(409).json({ message: "this category does not exist" });
    }
    const products = await Products.find({ category: type });

    res.status(200);
    res.send(products);
  } catch (error) {
    res.status(500);
    res.send();
  }
};
