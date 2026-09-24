const express = require("express");
const auth = require("../middleware/auth");
const QuizHistory = require("../models/QuizHistory");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { quizSlug, quizName, score, totalQuestions, feedback } = req.body;
    const history = await QuizHistory.create({
      userId: req.user.userId,
      quizSlug,
      quizName,
      score,
      totalQuestions,
      feedback,
    });

    res.status(201).json(history);
  } catch (error) {
    console.error("Save history error:", error);
    res.status(500).json({ message: "Failed to save quiz history" });
  }
});


router.get("/", auth, async (req, res) => {
  try {
    const history = await QuizHistory.find({ userId: req.user.userId })
      .sort({ createdAt: -1 }) 
      .limit(50);

    res.json(history);
  } catch (error) {
    console.error("Get history error:", error);
    res.status(500).json({ message: "Failed to get quiz history" });
  }
});

module.exports = router;
