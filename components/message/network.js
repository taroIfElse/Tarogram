const express = require("express");

const router = express.Router();

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "valor personalizado",
    "cache-control": "max-age=60",
  });
  response.success(req, res, "Lista de mensajes", 201);
});

router.post("/message", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error simulado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Creado con exito");
  }
  console.log(req.body);
  //res.status(201).send([{error: '', body: 'Creado con exito'}])
});

module.exports = router;
