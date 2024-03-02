const mongoose = require("mongoose");

const ProductSchema = new mongoose({
    name: { type: String, required:true},
    category:{typr:String, required:true},
    price:{typr:String, required:true},
    inStock :{type:Boolean},

});

const Products=mongoose.model("Products",ProductSchema);
module.exports = Products;