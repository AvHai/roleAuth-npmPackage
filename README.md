# roleAuth

A reusable role-based authentication package for Express + MongoDB.

## 🌟 Features
- ✅ User registration
- ✅ Login with JWT tokens
- ✅ Dynamic role configuration
- ✅ Middleware for auth & role checks
- ✅ Prebuilt routes (plug-and-play)

## 📦 Install
```bash
npm install roleadmin
```

## 🚀 Usage
```js
const express = require('express');
const { initAuth } = require('roleadmin');

const app = express();
app.use('/api/auth', initAuth());

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
MONGO_URI=mongodb://localhost:27017/roleauth
JWT_SECRET=your_secret
JWT_EXPIRATION=1d
DEFAULT_ROLES=user,moderator,admin
```

## 📝 Notes
- Make sure MongoDB is running and accessible at the URI you provide.
- The middleware auto-registers
