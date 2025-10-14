import express from "express";

const PORT = 3000;
const URL = 'https://fakestoreapi.com/products';
const app = express();

app.get("/", function(req, res){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => res.send(data));
});

app.listen(PORT, function(){ console.log("PORT 3000 IS ON")});


