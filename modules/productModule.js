const products = require('../data/products.json');
const uuid = require('uuid');
const { writeDataToFile } = require('../utils');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {id: uuid.v4(), ...product};
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  })
}

module.exports = {
  findAll,
  findById,
  create
}
