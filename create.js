//Agregar un objeto a la api
//http://localhost:3000/api/animes/create?nombre=angel&genero=maho&anio=1979&autor=shiro
export const createAnime = async (req, res) => {
  try {
    const nombre = req.query.nombre;
    const genero = req.query.genero;
    const anio = req.query.anio;
    const autor = req.query.autor;
    let newAnime = {
      nombre,
      genero,
      anio,
      autor,
    };
    let data = await fs.readFile(pathAnimes, "utf8");
    data = JSON.parse(data);
    let largo = Object.keys(data).length;
    let id = largo;
    console.log(id);
    newAnime = data[id];
    console.log(newAnime);
    newAnime.push(data);
    //await fs.writeFile(pathAnimes, "utf-8");
    //JSON.parse(data);
    //console.log(data)

    res.status(200).json({
      code: 200,
      message: "El animé buscado se ha cargado correctamente",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, message: `No se ha podido crear el nuevo animé` });
  }
};

{
    "1": {
    "nombre": "Akira",
    "genero": "Seinen",
    "año": "1988",
    "autor": "Katsuhiro Otomo"
    },
    "2": {
    "nombre": "Dragon Ball",
    "genero": "Shonen",
    "año": "1986",
    "autor": "Akira Toriyama"
    },
    "3": {
    "nombre": "Sailor Moon",
    "genero": "Shojo",
    "año": "1992",
    "autor": "Naoko Takeuchi"
    },
    "4": {
    "nombre": "Naruto",
    "genero": "Shonen",
    "año": "2002",
    "autor": "Masashi Kishimoto"
    },
    "5": {
    "nombre": "Neon Genesis Evangelion",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto"
 },
    "6": {
    "nombre": "Neon",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto"
 }
}

