
import express from "express";

const router = express.Router();

router.get("/", async function(req, res){   
    try {
        const API = process.env.API_STORE_URL;
        fetch(API)
        .then((data) => data.json())
        .then((json) => res.send(json))
    } catch (error) {
       console.error(error);
       res.status(500).send("Erro ao buscar dados da API externa");
    }    
});

export default router;