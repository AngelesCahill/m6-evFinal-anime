import fs from 'fs/promises';

//dirname con import
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let pathAnimes = path.resolve(__dirname, '../api/anime.json');

export const showAll = async (req, res) => {
    try {
        let animes = await fs.readFile(pathAnimes, 'utf8');
        animes = JSON.parse(animes);
        res.status(200).json({code: 200, message: 'Datos cargados correctamente', data: animes})
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Error al cargar datos'})
    }
}