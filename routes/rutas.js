//Se trae la funcion Router para separar
//las rutas de mi Api
const{ Router } = require('express')

//Una variable que personaliza mis rutas
const rutas=Router()

//rutas del Api
rutas.get("/avanzada/v1/jugadores", function (req, res) {
    res.send("peticion GET(Para buscar todos los jugadores)");
  });

  rutas.get("/avanzada/v1/jugadores/id", function (req, res) {
    res.send("peticion GET(Para buscar un jugador)");
  });

  rutas.post("/avanzada/v1/jugadores", function (req, res) {
    res.send("peticion POST(Para insertar)");
  });

  rutas.put("/avanzada/v1/jugadores/id", function (req, res) {
    res.send("peticion PUT(Para editar)");
  });

  rutas.delete("/avanzada/v1/jugadores/id", function (req, res) {
    res.send("peticion DELETE(Para eliminar)");
  });

module.exports=rutas                                    