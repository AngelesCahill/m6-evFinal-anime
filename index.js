import express from 'express';
const app = express();

//importar rutas
import animeRoutes from './routes/anime.routes.js';

const PORT = 4000;

//middlewares
app.use(express.json()); //guarda en req.body
app.use(express.urlencoded({ extended: true })) //guarda en req.body

app.use('/api/animes', animeRoutes);



app.listen(PORT, () => { console.log(`Escuchando puerto ${PORT}`)});
