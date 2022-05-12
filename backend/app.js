// Importation

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");

//Express

const app = express();
app.use(express.json());

//Correction erreur CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.CLIENT_URL}`);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));

// Routes files
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const commentaireRoutes = require("./routes/commentaire");

// Middlewares always executed
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentaireRoutes);

module.exports = app;