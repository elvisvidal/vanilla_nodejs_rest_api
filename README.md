# Vanilla Node.js REST api
Creating a simple REST api with only Node.js (no Express). In order to keep it simple, instead using any DB, I'm just using /data/products.js file.

## Setup --------------------------
To get the project up and running you gonna need:
1) Install node.js https://nodejs.org/en/. I'm currently running it on node version: v14.16.0 npm version: 7.6.0.
2) Run `npm install` to install all dependencies.
3) Run `npm run dev` to run the application localhost:5000 with `nodemon`.
4) Run `npm run start` to run the application localhost:5000.

## API -----------------------------
### <ins>Get products</ins>
* URL

  `/api/products`

* Method

  `GET`

* Success Response

  * code: 200
  * content: `[ ...,
  {
    "id": "1",
    "name": "Airpods",
    "description": "Bluetooth technology...",
    "price": 89.99
  }, ... ]`

* Error Response

  * code: 400
  * content: `{ message: 'Rout not found' }`
### <ins>Get product by id</ins>
* URL

  `/api/products/:id`

* Method

  `GET`

* URL Params

  * required: `id=[integer]`

* Success Response

  * code: 200
  * content: `{
    "id": "1",
    "name": "Airpods",
    "description": "Bluetooth technology...",
    "price": 89.99
  }`

* Error Response

  * code: 400
  * content: `{ message: 'Product not found' }`
### <ins>Create product</ins>
* URL

  `/api/products`

* Method

  `POST`

* Data Params

  + content: `{
    id=[integer],
    name=[string],
    description=[string],
    price=[number]
  }`

* Success Response

  * code: 201
  * content: `{
    "id": "1",
    "name": "Airpods",
    "description": "Bluetooth technology...",
    "price": 89.99
  }`

* Error Response

  * code: 400
  * content: `{ message: 'Rout not found' }`
### <ins>Update product</ins>
* URL

  `/api/products/:id`

* Method

  `PUT`

* URL Params

  * required: `id=[integer]`

* Data Params

  + content: `{
    id=[integer],
    name=[string],
    description=[string],
    price=[number]
  }`

* Success Response

  * code: 200
  * content: `{
    "id": "1",
    "name": "Airpods",
    "description": "Bluetooth technology...",
    "price": 89.99
  }`

* Error Response

  * code: 400
  * content: `{ message: 'Product not found' }`
### <ins>Delete product</ins>
* URL

  `/api/products/:id`

* Method

  `DELETE`

* URL Params

  * required: `id=[integer]`

* Success Response

  * code: 200
  * content: `{ message: 'Product [id] removed' }`

* Error Response

  * code: 400
  * content: `{ message: 'Product not found' }`