// ============================================
// APP.JSX - The Root Component
// ============================================
// Sets up React Router and wraps everything with AuthProvider.
//
// Route structure:
//   /auth           → Login/Register page
//   /dashboard      → Dashboard (quiz categories grid)
//   /dashboard/quiz/:slug → Quiz page for a specific category
//   /dashboard/history    → Quiz history
//   /dashboard/settings   → User settings
//   /                     → Redirects to /dashboard

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import AuthPage from "./pages/AuthPage";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import QuizPage from "./pages/QuizPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    // AuthProvider wraps everything so any component can access auth state
    <AuthProvider>
      {/* BrowserRouter enables client-side routing (no page reloads) */}
      <BrowserRouter>
        <Routes>
          {/* Public route - Login/Register */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected routes - wrapped by DashboardLayout which checks auth */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* index route = shown when URL is exactly /dashboard */}
            <Route index element={<DashboardPage />} />
            {/* :slug is a dynamic parameter (e.g., "science-trivia") */}
            <Route path="quiz/:slug" element={<QuizPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Redirect root "/" to "/dashboard" */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
