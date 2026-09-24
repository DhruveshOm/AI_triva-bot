// ============================================
// SETTINGS PAGE
// ============================================
// User profile settings page (replaces Clerk's UserProfile component).

import { useAuth } from "../context/AuthContext";
import "./SettingsPage.css";

function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="settings-page">
      <h1 className="settings-title">⚙️ Account Settings</h1>

      <div className="settings-card">
        <div className="settings-avatar">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <div className="settings-info">
          <div className="settings-field">
            <label className="settings-label">Full Name</label>
            <div className="settings-value">{user?.name || "—"}</div>
          </div>
          <div className="settings-field">
            <label className="settings-label">Email Address</label>
            <div className="settings-value">{user?.email || "—"}</div>
          </div>
          <div className="settings-field">
            <label className="settings-label">Member Since</label>
            <div className="settings-value">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
