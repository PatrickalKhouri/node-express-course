const express = require('express')
const { restart } = require('nodemon')
const app = express()
const {products} = require('./data')


app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/', (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image} = product
    return {id, name, image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    res.status(404).send('Product does not exist')
  }
  res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
  const {search, limit} = req.query;
  let sortedProduct = [...products];
  if(search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit))
  }
  if(sortedProduct < 1) {
    res.status(200).send('No products found')
  }
  res.status(200).json(sortedProduct)
})

app.get('/api/products/:productID/:reviews/:reviewID', (req, res) => {
  console.log(req)
  res.send('Hello world')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})