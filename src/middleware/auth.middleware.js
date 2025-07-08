import jwt from 'jsonwebtoken';
import config from '../config/index.js';

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
        }
    
        req.user = decoded;
        next();
    });
    }
export default authMiddleware;


