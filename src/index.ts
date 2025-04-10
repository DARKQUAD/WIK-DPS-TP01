import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenue sur mon API !");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({
    message: "Pong! 🏓",
    headers: req.headers,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
