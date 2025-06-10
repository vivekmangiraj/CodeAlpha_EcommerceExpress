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

git clone https://github.com/<your-username>/ecommerce-express.git
cd ecommerce-express

Install dependencies

npm install

Environment variables
Create a .env file in the root:

PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerce
SESSION_SECRET=your_secret_key

Seed the database (optional)

node seed.js

This will populate MongoDB with demo products and clear any existing ones.

Run the server

npm start
# or for auto-reload during development:
npx nodemon app.js

Open your browser at http://localhost:3000

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

🤝 Contributing

Fork the repository

Create a feature branch: git checkout -b feature/YourFeature

Commit changes: git commit -m "Add YourFeature description"

Push to branch: git push origin feature/YourFeature

Open a Pull Request

Please ensure code is clean and well-documented.

