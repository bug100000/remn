const mongoose = require('mongoose');
const url = 'mongodb://bug100000:myself@ds161262.mlab.com:61262/sustar';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  name: { type: String },
  password: { type: String }
});


module.exports.react = mongoose.model('react', userShema);
