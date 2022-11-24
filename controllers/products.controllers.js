import Product from "../dal/models/products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, description,features, price, image, stock } = req.body;
    const Newproduct = new Product({ name, description, features, price, image, stock });
    await Newproduct.save();
    return res.json(Newproduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const productRemoved = await Product.findByIdAndDelete(req.params.id);

    if (!productRemoved) {
      return res.sendStatus(404);
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const OneProduct = await Product.findById(req.params.id);

    if (!OneProduct) {
      return res.sendStatus(404);
    } else {
      return res.json(OneProduct);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};