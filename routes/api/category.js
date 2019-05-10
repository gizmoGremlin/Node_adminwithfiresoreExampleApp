const express = require('express');
const router = express.Router();
const categories = require('../../Categories');
const fire = require('../../firestore')
const db = fire.firestore()
router.post('/',(req,res) =>{
    const newCategory = {
      name:  req.body.name,
       image: req.body.image,
      slogan:  req.body.slogan
    }
   // res.json(newCategory);
   
   const categoryRef =  db.collection("category")
   categoryRef.add({
    name:  req.body.name,
    image: req.body.image,
   slogan:  req.body.slogan
   });
   res.status(200).json(newCategory);
});
router.post("/product",(req,res)=> {

  if(!req.body.category || !req.body.description || !req.body.image
    || !req.body.name || !req.body.price || !req.body.sku){
      return
    }

    const productRef = db.collection("productList");
    const newProduct = {
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      name: req.body.name,
      price: parseFloat(req.body.price),
      sku: parseInt(req.body.sku)
    }
    
    productRef.add({
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      name: req.body.name,
      price: parseFloat(req.body.price),
      sku: parseInt(req.body.sku)

    });
    res.status(200).json(newProduct);

    db.collection("productList")
    .onSnapshot(function(querySnapshot) {
        var products = [];
        querySnapshot.forEach(function(doc) {
            products.push(doc.data().name);
        });
        console.log("Current cities in CA: ", products.join(", "));
    });

});


  
module.exports = router;