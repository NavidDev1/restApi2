const express = require("express");
const fs = require("fs");

const productsData = fs.readFileSync("./data/products.json");
const products = JSON.parse(productsData);

const app = express();
app.use(express.json());


app.get("/products", (req, res) =>{
  res.json(products.productList);
})

app.get("/products/:productId", (req, res) => {
  const filtredProducts = products.productList.filter((product) => {
    if (product.id == req.params.productId) {
      return product;
    }
  });

  if (filtredProducts.length > 0) {
    res.json(filtredProducts[0]);
  } else{
    res.status(404);
    res.json(Json.parse("{}"));
  }
});


app.post("/products", (req, res)=> {
  let newProduct = req.body;
  let maxId = 0;

  for (let i = 0 ; i < products.productList.length; i++){
    if(products.productList[i].id > maxId){
      maxId = products.productList[i].id ;
    }
  }

  newProduct.id = maxId + 1;
  products.productList.push(newProduct);

  res.status(201);
  res.json(newProduct)
});

app.put("/products/:productId", (req, res) => {
  let updatedProduct = req.body;
  let productFound = false;

  for(let i = 0; i < products.productList.length; i++) {
    if (products.productList[i].id == req.params.productId) {
        updatedProduct.id = products.productList[i].id;
        productFound = true;
        products.productList[i] = updatedProduct;
        break;
    }
  }

  if (productFound) {
    res.json(updatedProduct);
  } else{
    res.status(404).json(JSON.parse("{}"));
  }
});

app.delete("/products/:productId", (req, res) =>{
  let deletedProduct;

  for(let i = 0; i < products.productList.length; i++) {
    if(products.productList[i].id == req.params.productId){
      deletedProduct = products.productList[i];
      products.productList.splice(i, 1);
      break;
    }
  }

  if(deletedProduct){
    res.json(deletedProduct);
  }else{
    res.status(404);
    resjson(JSON.parse("{}"));
  }
});

app.listen(3000, () =>{
  console.log("server is up and going");
})