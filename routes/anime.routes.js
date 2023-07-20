import { Router } from 'express';
import {
    showAll,
    filterIndex,
    deleteAnime,
    updateAnime,
    createAnime,
} from "../controllers/anime.controllers.js";

const router = Router();


// define the home page route
//localhost:4000/api/animes
router.get('/', showAll);
router.get('/:index', filterIndex);
router.get('/update/:id', updateAnime);
router.get('/delete/:id', deleteAnime);
router.post("/", createAnime);



export default router;
