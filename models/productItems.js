const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({

    productId : {
        type : Number,
        required : true,
        unique : true
    },
    quantity : {
        type : Number,
        required : true
    },
  
});
const Prodmodel = mongoose.model("ProductNames", prodSchema);

module.exports = Prodmodel;
