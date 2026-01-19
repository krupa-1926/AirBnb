// const jwt = require("jsonwebtoken");

// exports.authMiddleware = (req, res, next) => {
//   const token = req.cookies?.token;
//   if (!token) {
//     return res.status(401).json({ message: "No token" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     req.user = user;
//     next();
//   });
// };
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // or decoded.userId based on your token
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
