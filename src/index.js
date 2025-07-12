import connectDB from '../src/config/db.js';
import mainRouter from './routes/authRoutes.js';
import authMiddleware from './middleware/auth.middleware.js';
import rolesMiddleware from './middleware/roles.middleware.js';


const initAuth = (options = {}) => {
  connectDB(options.mongoURI || process.env.MONGO_URI);
  return mainRouter;
};


const authenticate = authMiddleware;
const authorize = rolesMiddleware;

export { initAuth, authenticate, authorize };


