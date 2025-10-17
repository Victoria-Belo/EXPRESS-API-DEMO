
import express from "express";

const router = express.Router();

router.get("/", async function(req, res){   
    try {
        const API = process.env.API_STORE_URL;
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
        let highRating = 0;
        let product = { 
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