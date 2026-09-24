// ============================================
// DASHBOARD LAYOUT
// ============================================
// This wraps all dashboard pages with the SideNav and Header.
// Outlet renders whichever nested route matches (Dashboard, Quiz, History, Settings).
// It also checks if user is logged in - if not, redirects to login.

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import "./DashboardLayout.css";

function DashboardLayout() {
  const { user, loading } = useAuth();

  // Show loading spinner while checking auth status
  if (loading) {
    return (
      <div className="layout-loading">
        <div className="layout-spinner"></div>
      </div>
    );
  }

  // If user is not logged in, redirect to auth page
  // This is called a "Protected Route" pattern
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar - fixed on the left */}
      <SideNav />

      {/* Main content area - shifted right to make room for sidebar */}
      <div className="dashboard-content">
        <Header />
        {/* Outlet renders the matched child route component */}
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
