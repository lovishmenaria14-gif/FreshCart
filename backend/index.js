import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import itemRouter from "./routes/item.routes.js";
import shopRouter from "./routes/shop.routes.js";
import orderRouter from "./routes/order.routes.js";
import http from "http";
import { Server } from "socket.io";
import { socketHandler } from "./socket.js";
import dns from "dns";

const app = express();
const server = http.createServer(app);

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const allowedOrigins = [
  "http://localhost:5173",
  "https://fresh-cart-steel-ten.vercel.app",
  "https://fresh-cart-9b81k0824-lovishmenaria14-gifs-projects.vercel.app",
];


app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
  },
});

app.set("io", io);

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/shop", shopRouter);
app.use("/api/item", itemRouter);
app.use("/api/order", orderRouter);

socketHandler(io);

server.listen(port, () => {
  connectDb();
  console.log(`Server started at ${port}`);
});