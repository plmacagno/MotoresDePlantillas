const { Router } = require('express');
const router = Router();
const ProductoMem = require('../classProductMem');

let productos = [];

router.get('/', (req, res) => {
    res.render('form');
})

router.get('/productos', (req, res) => {
   
    res.render('productos', { productos });
    
})

router.post('/productos', async (req, res) => {
    try{
        const { name, price, picture } = req.body;
        const produ = { name, price, picture };
        productos.push(produ);
        res.render('form');
    } catch (error) {
        console.log(error.message);
    }       
})

module.exports = router;