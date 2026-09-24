// ============================================
// DASHBOARD PAGE
// ============================================
// Main page after login. Shows SearchSection + grid of quiz categories.

import { useState } from "react";
import SearchSection from "../components/SearchSection";
import TemplateListSection from "../components/TemplateListSection";

function DashboardPage() {
  // This state is "lifted up" from SearchSection so TemplateListSection can use it.
  // This pattern is called "lifting state up" in React.
  const [userSearchInput, setUserSearchInput] = useState("");

  return (
    <div>
      <SearchSection onSearchInput={(value) => setUserSearchInput(value)} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default DashboardPage;
