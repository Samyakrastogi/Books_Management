const express = require("express");
const cors = require("cors");

const routes = require("./books.routes");
const app = express();
const db = require("./index");

app.use(express.json());
app.use(cors());

app.listen(4200, () => console.log("Express Server Started at Port 4200"));
app.use("/books", routes);
