
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");
const historyRoutes = require("./routes/history");

const app = express();



app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());


app.use("/api/auth", authRoutes);       // /api/auth/register, /api/auth/login, /api/auth/me
app.use("/api/quiz", quizRoutes);       // /api/quiz/generate, /api/quiz/evaluate
app.use("/api/history", historyRoutes); // /api/history (GET & POST)


app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Trivio API is running! 🚀" });
});


const PORT = process.env.PORT || 5000;


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 Trivio Backend Server running on http://localhost:${PORT}`);
    console.log(`📡 API Health Check: http://localhost:${PORT}/api/health\n`);
  });
});
