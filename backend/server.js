const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB()

const app = express();

//accepts body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/animes", require("./routes/animeRoutes"));
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler);

app.listen(port, () => console.log("server listening on port " + port));
