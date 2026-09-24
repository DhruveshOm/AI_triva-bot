const jwt = require("jsonwebtoken");

// Middleware = a function that runs BEFORE the actual route handler
// This checks if the user is logged in by verifying their JWT token

const auth = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
