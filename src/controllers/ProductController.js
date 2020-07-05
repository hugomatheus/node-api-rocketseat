const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

    async index (req, res) {
           
        const page = (req.query.page == undefined) ? 1 : req.query.page;

        await Product.paginate({}, {page, limit: 10 }, (err, products) => {
            if(err){
                return res.json({"error": "true", 'details': err});
            }

            return res.json(products);
        });
    },
    
    async show (req, res) {
        await Product.findById(req.params.id, (err, product) => {
            if(err){
                return res.json({"error": "true", 'details': err});
            }

            return res.json(product);
            
        });
         
    },

    async store (req, res) {
        await Product.create(req.body, (err, product) => {
            if(err){
                return res.json({"error": "true", 'details': err});
            }

            return res.json(product);
        });
    },

    async delete (req, res) {
        await Product.findByIdAndRemove(req.params.id, (err) => {
            if(err){
                return res.json({"error": "true", 'details': err});
            }
            
            return res.json({"success": true});
        });
    },

    async update (req, res) {
       await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, setDefaultsOnInsert: true}, function(err, product) {
            if(err){
                return res.json({"error": "true", 'details': err});
            }
            
            return res.json({"success": true, "product": product});
       });
        
    }
};