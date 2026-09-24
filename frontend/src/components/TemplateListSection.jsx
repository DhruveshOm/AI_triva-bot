// ============================================
// TEMPLATE LIST SECTION COMPONENT
// ============================================
// Renders the grid of quiz category cards.
// Filters cards based on the search input from SearchSection.

import { useState, useEffect } from "react";
import Templates from "../data/Templates";
import TemplateCard from "./TemplateCard";
import "./TemplateListSection.css";

function TemplateListSection({ userSearchInput }) {
  // State holds the currently displayed templates (may be filtered)
  const [templateList, setTemplateList] = useState(Templates);

  // useEffect runs whenever userSearchInput changes
  // It filters the templates array by name
  useEffect(() => {
    if (userSearchInput) {
      const filtered = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filtered);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="template-grid">
      {templateList.length > 0 ? (
        templateList.map((item) => <TemplateCard key={item.slug} {...item} />)
      ) : (
        <div className="no-results">
          <p>😕 No quizzes found matching your search</p>
        </div>
      )}
    </div>
  );
}

export default TemplateListSection;
