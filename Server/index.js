const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Rutas
app.use(require("./routes/index"));
app.listen(3002);
console.log("Servidor esta corriendo en 3002");
