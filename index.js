import express from 'express';
const app = express();

//importar rutas
import animeRoutes from './routes/anime.routes.js';

const PORT = 3000;

//middlewares
app.use("/api/animes", animeRoutes);



app.listen(PORT, () => { console.log(`Escuchando puerto ${PORT}`)});
