# 🛒 FreshCart

> **FreshCart** is a modern full-stack grocery shopping platform built with the **MERN Stack**, designed to provide a fast, secure, and seamless online grocery shopping experience. It features secure authentication, real-time functionality, responsive design, and an intuitive user interface.

---

## 🌐 Live Demo

### 🚀 Frontend

**https://fresh-cart-steel-ten.vercel.app**

### ⚙️ Backend API

**https://freshcart-a885.onrender.com**

---

## ✨ Features

### 🔐 Authentication & Security

* Secure JWT Authentication
* HTTP-only Cookie-based Sessions
* User Registration & Login
* OTP-based Password Reset via Email
* Protected Routes
* Password Encryption

### 🛍️ Shopping Experience

* Browse Grocery Products
* Product Search
* Category-wise Products
* Product Details
* Responsive Product Cards

### 🛒 Cart Management

* Add to Cart
* Remove from Cart
* Update Quantity
* Persistent Cart

### ❤️ Wishlist

* Add to Wishlist
* Remove from Wishlist
* Manage Favorite Products

### 📦 Orders

* Place Orders
* Order History
* User-specific Orders

### 👤 User Profile

* Profile Management
* Account Information
* Secure User Data

### ⚡ Real-Time Features

* Socket.IO Integration
* Online User Status

### 📱 Responsive Design

* Mobile Friendly
* Tablet Optimized
* Desktop Optimized

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Cookie Parser
* Nodemailer
* Socket.IO

## Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

# 📂 Project Structure

```text
FreshCart
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/lovishmenaria14-gif/FreshCart.git
cd FreshCart
```

---

## 2. Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=

MONGO_URI=

JWT_SECRET=

EMAIL=

PASS=

CLIENT_URL=
```

---

## 4. Start the Development Server

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Future Enhancements

* 💳 Online Payment Gateway (Stripe/Razorpay)
* ⭐ Product Ratings & Reviews
* 🎟️ Coupon & Discount System
* 📊 Admin Dashboard
* 📦 Inventory Management
* 🔔 Push Notifications
* 📍 Live Order Tracking
* 🤖 AI-powered Product Recommendations

---

# 📌 Why FreshCart?

FreshCart demonstrates practical implementation of modern full-stack web development concepts, including:

* RESTful API Development
* Authentication & Authorization
* State Management with Redux Toolkit
* Real-Time Communication using Socket.IO
* Responsive UI Design
* CRUD Operations
* MongoDB Database Design
* Cloud Deployment
* Email Integration
* Secure Session Handling

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve FreshCart:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a **⭐ Star** on GitHub. It helps support the project and motivates future improvements.

---

# 👨‍💻 Developer

**Lovish Menaria**

Full Stack Developer | MERN Stack Enthusiast

Thank you for visiting the repository! 🚀
