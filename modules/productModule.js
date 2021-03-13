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

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((product) => product.id === id);
    products[index] = {id, ...product};

    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  })
}

module.exports = {
  findAll,
  findById,
  create,
  update
}
