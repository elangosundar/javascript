var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var product = require('./product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 31114;
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/mongonode')
    .then(
       () =>  console.log('connection succesful in resfulApi---2')
    ) 
    .catch(
       (err) => console.error(err)
    );

// Middle Route 

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/products').post(function (req, res) {
    console.log("in add....!");
    var p = new product();
    p.title = req.body.title;
    p.price = req.body.price;
    p.instock = req.body.instock;
    p.photo = req.body.photo;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Product Created !' })
    })
});

router.route('/products').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});

router.route('/products/:product_id').get(function (req, res) {


    product.findById(req.params.product_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

router.route('/products/:product_id').put(function (req, res) {
console.log("I am in updating loop section-----.");
    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.title = req.body.title;
        prod.price = req.body.price;
        prod.instock = req.body.instock;
        prod.photo = req.body.photo;
console.log("Yes-----."+prod.title+", "+prod.price
    );     

        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});

router.route('/products/:product_id').delete(function (req, res) {

console.log("prodcutId------->"+req.params.product_id);
    product.remove({ _id: req.params.product_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});


app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);