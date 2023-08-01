const express = require('express')
const port = process.env.PORT || 4000;
const Prodmodel = require ('../models/productItems')
require("./db/mongoose"); 

const app = express()


app.use(express.json())

app.post('/updateProduct', async(req, res) =>{
    try {
        const payload = req.body;

        for (const item of payload) {
            const {productId, quantity, operation} = item ;

            let productEntry = await Prodmodel.findOne({productId});

            if (!productEntry) {
                productEntry = new Prodmodel({productId, quantity: 0});

            }

            if (operation === 'add') {
                productEntry.quantity += quantity;
            } else if (operation === 'subtract') {
                productEntry.quantity  -= quantity;
            }
            await productEntry.save();

        }

        res.status(200).json({message : 'Success'})
    } catch (error) {
        res.status(500).json({ error: "Failure" });
    }
})


app.listen (port, ()=>{
    console.log('Server is running on 4000')
})
