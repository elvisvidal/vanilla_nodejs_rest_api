const Product = require('../modules/productModule');

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Contet-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts
}
