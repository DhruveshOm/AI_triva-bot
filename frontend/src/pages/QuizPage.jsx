// ============================================
// QUIZ PAGE
// ============================================
// The main quiz experience page.
// 1. User clicks "Start Quiz" → we call backend → Gemini AI generates questions
// 2. User selects answers for each question
// 3. User clicks "Submit" → backend sends answers to Gemini for evaluation
// 4. Results are displayed and saved to MongoDB

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Templates from "../data/Templates";
import "./QuizPage.css";

const API_URL = "http://localhost:5002/api";

function QuizPage() {
  // useParams() gives us the dynamic part of the URL
  // For /dashboard/quiz/science-trivia → slug = "science-trivia"
  const { slug } = useParams();
  const { token } = useAuth();

  // Find the matching template from our data
  const selectedTemplate = Templates.find((t) => t.slug === slug);

  // Component states
  const [loading, setLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({}); // { 0: "answer", 1: "answer", ... }
  const [quizResult, setQuizResult] = useState(null);

  // Generate quiz questions by calling our backend API
  const generateQuiz = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/quiz/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          aiPrompt: selectedTemplate?.aiPrompt || "general knowledge quiz",
          quizName: selectedTemplate?.name || "General Knowledge",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setQuestions(data.questions);
      setQuizStarted(true);
    } catch (error) {
      alert("Failed to generate quiz: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // When user selects an answer for a question
  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  // Submit quiz for evaluation
  const submitQuiz = async () => {
    setLoading(true);
    try {
      // Step 1: Get AI evaluation
      const evalRes = await fetch(`${API_URL}/quiz/evaluate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ questions, userAnswers }),
      });

      const evalData = await evalRes.json();
      if (!evalRes.ok) throw new Error(evalData.message);

      setQuizResult(evalData);

      // Step 2: Save result to quiz history in MongoDB
      await fetch(`${API_URL}/history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quizSlug: slug,
          quizName: selectedTemplate?.name || "General Knowledge",
          score: evalData.score,
          totalQuestions: evalData.total,
          feedback: evalData.feedback,
        }),
      });
    } catch (error) {
      alert("Failed to submit quiz: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Reset everything for a new quiz
  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setUserAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="quiz-page">
      {/* Back button */}
      <Link to="/dashboard" className="quiz-back-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </Link>

      <div className="quiz-layout">
        {/* Main quiz area */}
        <div className="quiz-main">
          {!quizStarted ? (
            /* START SCREEN */
            <div className="quiz-start-screen">
              {selectedTemplate && (
                <img
                  src={selectedTemplate.icon}
                  alt={selectedTemplate.name}
                  className="quiz-start-icon"
                />
              )}
              <h1 className="quiz-start-title">
                {selectedTemplate?.name || "General Knowledge"} Quiz
              </h1>
              <p className="quiz-start-desc">{selectedTemplate?.desc}</p>
              <button
                onClick={generateQuiz}
                disabled={loading}
                className="quiz-start-btn"
              >
                {loading ? (
                  <>
                    <span className="quiz-spinner"></span>
                    Generating Questions...
                  </>
                ) : (
                  <>🚀 Start Quiz</>
                )}
              </button>
            </div>
          ) : (
            /* QUESTIONS */
            <div className="quiz-questions">
              <h2 className="quiz-questions-title">
                {selectedTemplate?.name || "General Knowledge"} Quiz
              </h2>

              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`quiz-question-card ${
                    userAnswers[index] ? "quiz-question-answered" : ""
                  }`}
                >
                  <p className="quiz-question-text">
                    <span className="quiz-question-number">{index + 1}</span>
                    {question.question}
                  </p>
                  <div className="quiz-options">
                    {question.options.map((option, optIndex) => (
                      <label
                        key={optIndex}
                        className={`quiz-option ${
                          userAnswers[index] === option ? "quiz-option-selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          checked={userAnswers[index] === option}
                          onChange={() => handleAnswerSelect(index, option)}
                          className="quiz-radio"
                        />
                        <span className="quiz-option-indicator"></span>
                        <span className="quiz-option-text">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="quiz-actions">
                <button
                  onClick={submitQuiz}
                  disabled={loading || Object.keys(userAnswers).length === 0}
                  className="quiz-submit-btn"
                >
                  {loading ? (
                    <>
                      <span className="quiz-spinner"></span>
                      Evaluating...
                    </>
                  ) : (
                    "Submit Quiz"
                  )}
                </button>
                <button onClick={resetQuiz} className="quiz-reset-btn">
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results sidebar */}
        {quizResult && (
          <div className="quiz-results">
            <div className="quiz-results-card">
              <h2 className="quiz-results-title">🎉 Quiz Results</h2>
              <div className="quiz-score-circle">
                <span className="quiz-score-number">{quizResult.score}</span>
                <span className="quiz-score-divider">/</span>
                <span className="quiz-score-total">{quizResult.total}</span>
              </div>
              <div className="quiz-score-bar">
                <div
                  className="quiz-score-fill"
                  style={{
                    width: `${(quizResult.score / quizResult.total) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="quiz-feedback">{quizResult.feedback}</p>
              <button onClick={resetQuiz} className="quiz-retry-btn">
                🔄 Take Another Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
