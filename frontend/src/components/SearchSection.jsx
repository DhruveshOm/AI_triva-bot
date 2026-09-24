// ============================================
// SEARCH SECTION COMPONENT
// ============================================
// Hero banner on the dashboard with a search bar to filter quiz categories

import "./SearchSection.css";

function SearchSection({ onSearchInput }) {
  return (
    <div className="search-section">
      {/* Animated background particles */}
      <div className="search-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <div className="search-content">
        <h2 className="search-title">Let the Quiz Begin ✨</h2>
        <p className="search-subtitle">"Think fast, score big, learn faster"</p>

        <div className="search-bar-wrapper">
          <div className="search-bar">
            <svg
              className="search-bar-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search quizzes..."
              className="search-bar-input"
              onChange={(e) => onSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
