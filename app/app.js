import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import storeRoutes from './routes/storeRoutes.js'

dotenv.config({path: './.env.development'});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/", storeRoutes);
app.listen(PORT, function(){ console.log(`${PORT} is ON`)});


