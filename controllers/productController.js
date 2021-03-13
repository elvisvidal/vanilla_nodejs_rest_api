const Product = require('../modules/productModule');
const { getPostData } = require('../utils');

/**
 * Gets all produts
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @route {GET} /api/products
 */
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Contet-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get a produt by ID
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Interger} id Product id
 * @route {GET} /api/products/:id
 */
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { 'Contet-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    } else {
      res.writeHead(200, { 'Contet-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }

  } catch (error) {
    console.log(error)
  }
}

/**
 * Create a new product
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @route {POST} /api/products
 */
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);
    const product = { title, description, price };
    const newProduct = await Product.create(product);

    res.writeHead(201, { 'Contet-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Update a product
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @route {PUT} /api/products/:id
 */
 async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { 'Contet-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    } else {
      const body = await getPostData(req);
      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price
      };
      const updProduct = await Product.update(id, productData);

      res.writeHead(200, { 'Contet-Type': 'application/json' });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct
}
