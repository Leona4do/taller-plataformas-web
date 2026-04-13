require("dotenv").config();

const express = require("express");
const privadoRoutes = require("./routes/privado");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

app.use("/api/privado", privadoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}` );
});
