import { Router } from 'express';
import { showAll } from "../controllers/anime.controllers.js";

const router = Router();


// define the home page route
//localhost:3000/api/animes
router.get("/", showAll);


export default router;
