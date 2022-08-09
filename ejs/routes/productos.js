const { Router } = require('express');
const ProductoMem = require('../classProductMem');

const router = Router();

productos = [];

router.get('/productos',  (req, res) => {
    res.render('form');
})

router.get('/', (req, res) => {
       const prod = ProductoMem.productos;
       res.render('productos', { prod });

})

router.post('/productos', async (req, res) => {
    try{
    let { name, price, picture } = req.body;
    const prod = { name, price, picture };
    productos.push(prod);
    res.render('form');
    } catch (error) {
        console.log(error.message);
    }       
});

module.exports = router;