E-Commerce Express

A modern, responsive e-commerce website built with Node.js, Express, EJS, and MongoDB. Users can browse products, view details, add items to a shopping cart, and manage their account with authentication.

🛠️ Features

Product Catalog with dynamic listings

Product Detail pages with rich imagery

Shopping Cart: add, view, remove items

User Authentication (signup, login, logout) powered by Passport.js

Responsive UI with Bootstrap & custom styles

Dark/Light Mode toggle

Flash Messages for feedback

Admin Seeding Script for quick demo data

📦 Tech Stack

Backend: Node.js, Express

Templating: EJS (+ express-ejs-layouts)

Database: MongoDB (Mongoose ODM)

Auth: Passport.js, express-session

Styling: Bootstrap 5, custom CSS

Icons & Fonts: Font Awesome, Google Fonts

🚀 Prerequisites

Node.js v14+ installed

MongoDB running locally or via Atlas

Git (optional, for version control)

🔧 Installation

Clone the repo

git clone https://github.com/<your-username>/CodeAlpha_EcommerceExpress.git
cd CodeAlpha_EcommerceExpress

📂 Project Structure

├── app.js              # Application entry point
├── seed.js             # Database seeder script
├── models/             # Mongoose schemas (Product, User, Cart)
├── routes/             # Express route handlers
├── views/              # EJS templates
│   ├── layout.ejs
│   ├── index.ejs
│   ├── product-detail.ejs
│   └── ...
├── public/             # Static assets
│   ├── css/style.css
│   └── images/         # Product & hero images
├── package.json
└── .env                # Environment variables (gitignored)

