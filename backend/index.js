import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Base de Datos Conectada...');
} catch (error) {
    console.error('Error de Conecxion:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
 
app.listen(5000, () => console.log('Servidor corre por el puerto 5000'));