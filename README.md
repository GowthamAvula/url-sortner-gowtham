# 🔗 Url Shortner - Premium URL Shortening & Analytics Platform

A highly polished, modern, full-stack MERN application built on top of the **create-url-sortner** boilerplate. It allows users to create secure shortened URLs, specify custom short codes, generate and download QR codes instantly, and track redirect click analytics in real-time.

---

## 🎯 About this Project

This application is customized with premium features and a high-end glassmorphism design:
* **Custom URL Codes**: Specify your own brand codes (e.g., `/hn-dev-test`) or generate robust 7-character random codes automatically.
* **Automatic QR Codes**: Renders a dynamic, scan-ready QR code instantly on generation, complete with a one-click PNG download feature.
* **Real-time Analytics**: Keeps exact counts of redirects (`clickCount`) in MongoDB.
* **Safety & Expiry Validation**: Built-in verification for deactivation status and expiration dates before redirecting.
* **Breathtaking Glassmorphism UI**: Beautifully designed responsive Home and Profile sections using Mantine UI layered over elegant gradient backdrops.

---
[![npm version](https://img.shields.io/npm/v/create-bz-mern-app.svg)](https://www.npmjs.com/package/create-bz-mern-app)
[![npm downloads](https://img.shields.io/npm/dm/create-bz-mern-app.svg)](https://www.npmjs.com/package/create-bz-mern-app)
[![GitHub stars](https://img.shields.io/github/stars/kaushikkumarbz/create-bz-mern-app?style=social)](https://github.com/kaushikkumarbz/create-bz-mern-app)

A modern fullstack boilerplate powered by:

- ⚛️ **Frontend**: Vite + React + Mantine  
- 🔐 **Authentication**: Google Login + JWT  
- 🌐 **Backend**: Node.js + Express + MongoDB  

## ⚙️ Full Setup Instructions

### 🔹 Step 1: Create a Git Repository

Create a [new GitHub repository](https://github.com/new) (e.g.):
```
https://github.com/kaushikkumarbz/url-shortener-dev-example
```
During repo creation, **select `.gitignore` → Node**.

---

### 🔹 Step 2: Clone the Repository

```bash
git clone git@github.com:kaushikkumarbz/url-shortener-dev-example.git
cd url-shortener-dev-example
```

---

### 🔹 Step 3: Scaffold the Project

Inside the cloned folder:

```bash
npx create-bz-mern-app@latest
```

This will set up the following folder structure:

```
url-shortener-dev-example/
  ├── backend/
  └── frontend/
```

---

### 🔹 Step 4: Configure `.gitignore` and `.env` Files

By default, `.env` files are ignored. But for Vite frontend to work properly, you should:

1. Open `.gitignore`
2. Replace:
   ```
   .env
   .env/*
   ```
   with:
   ```
   /backend/.env
   ```

✅ This allows:
- ✅ `frontend/.env` to be committed (used by Vite)
- 🔒 `backend/.env` to stay private (JWT, DB credentials)

---

### 🔹 Step 5: Setup Environment Variables

#### 📁 `backend/.env`
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_secure_jwt_secret
```

#### 📁 `frontend/.env`
```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_BZENV=development  # or production
VITE_DEV_PROXY=http://localhost:3000
```

---

### 🔹 Step 6: Install Dependencies and Start

Quick Start
Start frontend and backend together from root:
```bash
npm run dev
```

# OR

If you prefer running frontend and backend separately, follow the setup steps below.
#### ➤ Frontend

```bash
cd frontend
npm install
npm run build
npm start
```

#### ➤ Backend

```bash
cd ../backend
npm install
npm start
```
---

## 🛠️ Tech Stack

- **Frontend**: Vite, React, Mantine, Google OAuth2
- **Backend**: Node.js, Express, MongoDB, JWT
- **Tooling**: ESLint, Prettier, dotenv

---

## 🙌 Contributing

Feel free to fork and create PRs to improve the boilerplate!

---

## 📄 License

MIT © 2025 [Kaushikk](https://github.com/kaushikkumarbz)
