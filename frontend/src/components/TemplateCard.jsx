// ============================================
// TEMPLATE CARD COMPONENT
// ============================================
// A single quiz category card shown on the dashboard grid.
// Uses React Router's Link to navigate to the quiz page.

import { Link } from "react-router-dom";
import "./TemplateCard.css";

function TemplateCard({ name, desc, icon, slug }) {
  return (
    <Link to={`/dashboard/quiz/${slug}`} className="template-card-link">
      <div className="template-card">
        <div className="template-card-glow"></div>
        <img src={icon} alt={name} className="template-card-icon" />
        <h3 className="template-card-title">{name}</h3>
        <p className="template-card-desc">{desc}</p>
        <div className="template-card-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
