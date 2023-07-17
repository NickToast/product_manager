//what are routes used for? we need controller info (our actions) so that when we go to our route, something happens

const productController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', productController.allProducts);
    app.get('/api/products/:id', productController.oneProduct);
    app.post('/api/products', productController.addProduct);
    app.put('/api/products/:id', productController.updateProduct);
    app.delete('/api/products/:id', productController.deleteProduct);
}