import express from "express";
import "./config.js";
import next from "next";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import https from "https";
import fs from "fs";
import connectDB from "./db/connection.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";

// import "src/server/keys/privatekey.pem";
// import "./keys/certificate.pem";

const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
const server = express();

// Connect to DB
connectDB();

// Middleware
server.use(express.json());
server.use(helmet()); // Adds security-related HTTP headers
server.use(cors()); // Configures CORS
server.use(morgan("combined"));

// Routes
server.use("/api/auth", authRoutes);
server.use("/api/posts", postRoutes);

server.get("/api/ben/dover", (req, res) => {
  return res.json({ message: "ben dover..." });
});

// SSL Certificate and Key
// const options = {
//   key: fs.readFileSync("src/server/keys/privatekey.pem"),
//   cert: fs.readFileSync("src/server/keys/certificate.pem"),
// };

// https.createServer(options, server).listen(process.env.PORT, (err) => {
//   if (err) throw err;
//   console.log(`> Ready on https://localhost:${process.env.PORT}`);
// });

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Connecting the application to Nextjs
// app.prepare().then(() => {
// Express.js routes and middleware go here

// });

// server.get("*", (req, res) => {
//   return handle(req, res);
// });
