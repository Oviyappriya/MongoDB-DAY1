//Question 1: Find all the information about each products
db.ProductDetails.find();

//Question 2:Find the product price which are between 400 to 800
db.ProductDetails.find({product_price:{$gte:400, $lte:800}});

//Question 3:Find the product price which are not between 400 to 600

db.ProductDetails.find({product_price:{$lte:400, $gte:600}});

//Question 4:List the four product which are greater than 500 in price 

db.ProductDetails.find({product_price:{$gt:500}},{},{limit:4});

//Question 5:Find the product name and product material of each products
db.ProductDetails.find({},{product_name:1,product_material:1})

//Question 6:Find the product with a row id of 10
db.ProductDetails.find({id:"10"})

//Question 7:Find only the product name and product material
db.ProductDetails.find({},{product_name:1,product_material:1,_id:0})

//Question 8:Find all products which contain the value of soft in product material 
db.ProductDetails.find({product_material:{$eq:"Soft"}});

//Question 9:Find products which contain product color indigo  and product price 492.00
db.ProductDetails.find({product_material:"indigo",product_price:492});
//question 10:Delete the products which product price value are 28
db.ProductDetails.deleteOne({product_price:28})
