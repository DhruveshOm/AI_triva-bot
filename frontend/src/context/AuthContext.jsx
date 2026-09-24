// ============================================
// AUTH CONTEXT
// ============================================
// React Context provides a way to share data (like user info, token)
// across ALL components without passing props manually at every level.
//
// Think of it as a "global state" for authentication.
// Any component can access user info by using: const { user } = useAuth()

import { createContext, useContext, useState, useEffect } from "react";

// Step 1: Create the context (like creating an empty container)
const AuthContext = createContext(null);

// The API URL - points to our Express backend
const API_URL = "http://localhost:5002/api";

// Step 2: Create the Provider component (fills the container with data)
export function AuthProvider({ children }) {
  // State to store the current user object
  const [user, setUser] = useState(null);
  // State to store the JWT token
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // Loading state while we check if user is already logged in
  const [loading, setLoading] = useState(true);

  // useEffect runs when the component first mounts (page load)
  // If there's a token in localStorage, verify it's still valid
  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch the current user's info from the backend
  const fetchUser = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        // Token is invalid/expired - clear everything
        logout();
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Register a new user
  const register = async (name, email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // Save token to localStorage so user stays logged in after page refresh
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  // Log in an existing user
  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  // Log out the user
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  // Step 3: Provide all auth data/functions to children components
  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Step 4: Custom hook to easily access auth context from any component
// Usage: const { user, login, logout } = useAuth()
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
