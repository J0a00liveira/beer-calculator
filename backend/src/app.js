const express = require("express");
require("dotenv").config();

const beerRoutes = require("./routes/beer");

const port = process.env.PORT || 8081;
const server = express();

server.use(express.json());
server.use("/beers", beerRoutes);

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = server;