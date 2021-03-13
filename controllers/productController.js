const Product = require('../modules/productModule');

/**
 * Gets all produts
 * @param {Object} req Request object
 * @param {Object} res Response object
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

module.exports = {
  getProducts,
  getProduct
}
