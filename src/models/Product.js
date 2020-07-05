const mongoose = require('mongoose');   
var mongoosePaginate = require('mongoose-paginate-v2');

  var Schema = mongoose.Schema;

  var ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  });

  ProductSchema.plugin(mongoosePaginate);
  mongoose.model('Product', ProductSchema);