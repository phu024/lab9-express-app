var expressFunction = require('express');
const router = expressFunction.Router();
const Authorization = require('../config/authorize')

const product = [{
    type: 'cpe',
    id: '10001',
    name: 'Tntel Core i7 Gen 10th',
    detail: 'Yhe Intel Core i7-10750H is a high-end processor',
    quantity: 10,
    price: 10
}];

router.route('/products')
    .get(Authorization, (req, res) => {
        res.status(200).json(product);
    })

module.exports = router