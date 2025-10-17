
import express from "express";
import { Product } from "../interfaces/Product";

const router = express.Router();

router.get("/", async function(req, res){   
    try {
        const API = process.env.API_STORE_URL;
        if (!API) throw new Error("API_STORE_URL não definida");
        await fetch(API)
        .then((data) => data.json())
        .then((json) => res.send(json))
    } catch (error) {
       console.error(error);
       res.status(500).send("Erro ao buscar dados da API externa");
    }    
});

router.get("/cards", async function(req, res){
    try {
        const API = process.env.API_STORE_URL;
        if (!API) throw new Error("API_STORE_URL não definida");
        let highRating : number = 0;
        let product: Product = { 
            img: null,
            price: null,
            category: null,
            rating: null 
            }
        return fetch(API)
        .then((data) => data.json())
        .then((json)=> {           
            for(const element of json) {
                if(element.rating.rate > highRating){
                    highRating = element.rating.rate;
                    product = {
                        img: element.image,
                        price: element.price,
                        category: element.category,
                        rating: highRating
                    }
                }               
            };   //end-for  
            return res.json(product);                
        });    //end-then()             
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar dados da API externa");
    }
});

export default router;