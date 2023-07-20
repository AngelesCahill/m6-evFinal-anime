import fs from "fs/promises";

//dirname con import
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let pathAnimes = path.resolve(__dirname, "../api/anime.json");
//Mostrar todos los datos de la api
//http://localhost:4000/api/animes
export const showAll = async (req, res) => {
  try {
    let animes = await fs.readFile(pathAnimes, "utf8");
    animes = JSON.parse(animes);
    res
      .status(200)
      .json({
        code: 200,
        message: "Datos cargados correctamente",
        data: animes,
      });
  } catch (error) {
    res.status(500).json({ code: 500, message: "Error al cargar datos" });
  }
};

//Filtrar un objeto de la api (filtra por index)
//http://localhost:4000/api/animes/2
export const filterIndex = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await fs.readFile(pathAnimes, "utf8");
    data = JSON.parse(data);
    let animeBuscado = data[id];

    if (!animeBuscado)
      return res
        .status(404)
        .json({ code: 404, message: `No existe el animé con index ${id}` });
    res.status(200).json({
      code: 200,
      message: "El animé buscado se ha cargado correctamente",
      data: animeBuscado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error al cargar datos" });
  }
};

//Borrar un objeto de la api (filtra por index)
//http://localhost:4000/api/animes/delete/6
export const deleteAnime = async (req, res) => {
  let id = req.params.id;
                                                                                                                                                                                                                                                                
  try {
    let data = await fs.readFile(pathAnimes, "utf8");
    data = JSON.parse(data);
    let data1 = data;
    let animeEliminado = delete data1[id];
    
    animeEliminado = data;
    await fs.writeFile(pathAnimes, JSON.stringify(data, null, 2), "utf8");
    if (!animeEliminado || id > data.length)
      return res.status(404).json({
        code: 404,
        message: `No se ha podido eliminar el animé con index ${id}`,
      });
    res.status(200).json({
      code: 200,
      message: `Se ha eliminado correctamente el animé seleccionado con id: ${id}`,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error al cargar datos" });
  }
};
//Actualizar un objeto de la api 
//http://localhost:4000/api/animes/update/1?nombre=ACTUALIZADO&autor=ACTUALIZADO
  export const updateAnime = async (req, res) => {
    try {
      const id = req.params.id;
      const nombre = req.query.nombre;
      const genero = req.query.genero;
      const anio = req.query.anio;
      const autor = req.query.autor;
      let encontrado = false;

      const data = JSON.parse(
        await fs.readFile(pathAnimes, "utf8")
      );
      let data2 = data[id];
      if (data2) {
        data2.nombre = nombre;
        data2.genero = genero;
        data2.anio = anio;
        data2.autor = autor;
        encontrado = true;
      }

      if (encontrado) {
        await fs.writeFile(pathAnimes, JSON.stringify(data), "utf8");
        res.status(201).json(data);
      } else {
        res.status(404).json({
          status: "OK",
          message: "No existe el animé que desea actualizar",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
    res.end();
  };

//Crear un objeto a la api
//http://localhost:4000/api/animes/create?nombre=angel&genero=maho&anio=1979&autor=shiro
export const createAnime = async (req, res) => {
      try {
        const nombre = req.query.nombre;
        const genero = req.query.genero;
        const anio = req.query.anio;
        const autor = req.query.autor;
        const newAnime = {
          nombre,
          genero,
          anio,
          autor,
          creado: true
        };
        const data = await fs.readFile(pathAnimes, "utf8");
        data = JSON.parse(data);
        //let ultimoId = Object.keys(data)
        //let last = ultimoId[ultimoId.length - 1]
        //let id = (last +1).toString;
        let id = "7";
        newAnime = data[id];
        console.log(data[id])
        if (creado) {
          await fs.writeFile(pathAnimes, JSON.stringify(data), "utf8");
          res.status(201).json(data);
        } else {
          res.status(404).json({
            status: "OK",
            message: "No fue posible crear el nuevo animé",
          });
        }
        
      } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
      }
      res.end();
};



