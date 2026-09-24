// ============================================
// HISTORY PAGE
// ============================================
// Shows the user's past quiz attempts fetched from MongoDB.

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./HistoryPage.css";

const API_URL = "http://localhost:5002/api";

function HistoryPage() {
  const { token } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quiz history when the page loads
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_URL}/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setHistory(data);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false);
    }
  };

  // Format date to a readable string
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="history-loading">
        <div className="history-spinner"></div>
        <p>Loading your quiz history...</p>
      </div>
    );
  }

  return (
    <div className="history-page">
      <h1 className="history-title">📊 Quiz History</h1>
      <p className="history-subtitle">Your past quiz performances</p>

      {history.length === 0 ? (
        <div className="history-empty">
          <span className="history-empty-icon">🎯</span>
          <h3>No quizzes taken yet!</h3>
          <p>Start a quiz from the dashboard to see your history here.</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div key={item._id} className="history-card">
              <div className="history-card-header">
                <h3 className="history-quiz-name">{item.quizName}</h3>
                <span className="history-date">{formatDate(item.createdAt)}</span>
              </div>
              <div className="history-card-body">
                <div className="history-score">
                  <span className="history-score-num">{item.score}</span>
                  <span className="history-score-sep">/</span>
                  <span className="history-score-total">{item.totalQuestions}</span>
                </div>
                <div className="history-bar">
                  <div
                    className="history-bar-fill"
                    style={{
                      width: `${(item.score / item.totalQuestions) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              {item.feedback && (
                <p className="history-feedback">{item.feedback}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
