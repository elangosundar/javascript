var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    title: String,
    price: Number,
    instock: Boolean,
    photo: String,
});
module.exports = mongoose.model('Product', ProductSchema);


/*

Example:

{
"title": "Elangovan",
"price": "500",
"instock": "true",
"photo": "test.jpg"
}


*/

/* Way to connect MongoDb with connection Model example */

/*

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongonode', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

*/