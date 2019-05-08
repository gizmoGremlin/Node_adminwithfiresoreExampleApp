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


  
module.exports = router;