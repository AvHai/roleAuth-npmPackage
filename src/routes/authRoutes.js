import express from 'express';
import { register, login } from '../controllers/auth.controllers.js';
import authMiddleware from '../middleware/auth.middleware.js';
import rolesMiddleware from '../middleware/roles.middleware.js';    

const mainRouter = express.Router();

const authenticate = authMiddleware;
const authorize = rolesMiddleware;

mainRouter.post('/register', register);
mainRouter.post('/login', login);


mainRouter.get('/user', authenticate, (req, res) => {
  res.json({ message: 'Hello User!', user: req.user });
});

mainRouter.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!', user: req.user });
});

export default mainRouter;