const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/generate", auth, async (req, res) => {
  try {
    const { aiPrompt, quizName } = req.body;

    if (!aiPrompt) {
      return res.status(400).json({ message: "AI prompt is required" });
    }


    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


    const prompt = `Generate a random trivia bot like quiz with 10 multiple choice questions about ${aiPrompt}. 
      Return ONLY the raw JSON array without any markdown formatting or code blocks.
      Each question object must have:
      {
        "question": "string",
        "options": ["string", "string", "string", "string"],
        "correctAnswer": "string" (must exactly match one option)
      }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text().trim();
    responseText = responseText.replace(/^```json/i, "").replace(/^```/i, "").replace(/```$/i, "").trim();

    const questions = JSON.parse(responseText);

    if (!Array.isArray(questions)) {
      throw new Error("Invalid quiz format received from AI");
    }

    res.json({ questions, quizName });
  } catch (error) {
    console.error("Quiz generation error:", error);
    res.status(500).json({
      message: "Failed to generate quiz. Please try again.",
      error: error.message,
    });
  }
});


router.post("/evaluate", auth, async (req, res) => {
  try {
    const { questions, userAnswers } = req.body;

    if (!questions || !userAnswers) {
      return res.status(400).json({ message: "Questions and answers are required" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Evaluate this quiz:
      Questions: ${JSON.stringify(questions)}
      User Answers: ${JSON.stringify(userAnswers)}
      
      Return ONLY a valid JSON object (no markdown, no code blocks) with:
      {
        "score": number (count of correct answers),
        "total": number (total questions),
        "feedback": "string" (constructive and encouraging feedback about performance)
      }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text().trim();

    // Clean up markdown formatting
    responseText = responseText.replace(/^```json/i, "").replace(/^```/i, "").replace(/```$/i, "").trim();

    const evaluation = JSON.parse(responseText);
    res.json(evaluation);
  } catch (error) {
    console.error("Quiz evaluation error:", error);
    res.status(500).json({
      message: "Failed to evaluate quiz. Please try again.",
      error: error.message,
    });
  }
});

module.exports = router;
