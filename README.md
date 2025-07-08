# rbac-auth

A reusable role-based authentication package for Express + MongoDB.

## 🌟 Features
- ✅ User registration
- ✅ Login with JWT tokens
- ✅ Dynamic role configuration
- ✅ Middleware for auth & role checks
- ✅ Prebuilt routes (plug-and-play)

## 📦 Install
```bash
npm install rbac-auth
```

## 🚀 Usage
```js
const app = require('rbac-auth');

app.listen(5000, () => {
  console.log('Auth server running on http://localhost:5000');
});
```

## ⚙ Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET  /api/auth/user` (protected)
- `GET  /api/auth/admin` (admin only)

## 🔒 Environment Variables
```env
MONGO_URI=mongodb://localhost:27017/rbacauth
JWT_SECRET=your_secret
JWT_EXPIRE=1h
DEFAULT_ROLES=user,moderator,admin
```
