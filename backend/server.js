const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//accepts body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/animes", require("./routes/animeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else{
    app.get('/',(req,res)=> res.send('Please set to production'))
}

app.use(errorHandler);

app.listen(port, () => console.log("server listening on port " + port));
