import { Router } from 'express';
import { showAll, filterIndex, createAnime, deleteAnime, updateAnime } from '../controllers/anime.controllers.js';

const router = Router();


// define the home page route
//localhost:3000/api/animes
router.get('/', showAll);
router.get('/:index', filterIndex);
router.get('/update/:id', updateAnime);
router.get('/create', createAnime);
router.get('/delete/:id', deleteAnime);



export default router;
