![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Deployment](https://img.shields.io/badge/Deploy-Render-purple)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-orange)

# Airbnb Clone

## Overview

This project is a full-stack web application developed as a clone of Airbnb using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to replicate the core functionality of Airbnb, allowing users to search for accommodations, view details, make bookings, and manage their listings.

Deployed on **Render** with MongoDB Atlas.  

🔗 **Live Demo**: [Frontend Link](https://airbnbfrontend-five.vercel.app)  
🔗 **Backend API**: [Backend Link](https://airbnb-backend-qf96.onrender.com)  

---

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Stack](#Technologies-Used)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Author](#author)

---

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/krupa-1926/AirBnb.git

   ```

2. **Install dependencies:**

   Navigate to client directory and install frontend dependencies using npm

   ```
   npm install
   ```

   Similary navigate to api folder and install backend dependencies

   ```
   npm install
   ```

3. **ENV variables:**

   - create .env file in the client folder and add these variables

     #### VITE_BASE_URL= http://localhost:4000

     #### VITE_GOOGLE_CLIENT_ID= your google client id

   - create .env file in the api folder and add these variables

     #### PORT= 4000

     #### DB_URL= your db url

     #### JWT_SECRET= your secret (string)

     #### JWT_EXPIRY= 20d

     #### COOKIE_TIME= 7

     #### SESSION_SECRET= your secret session (string)

     #### CLOUDINARY_CLOUD_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

4. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       npm run dev
   ```
   - Open another terminal, navigate to api directory and run this command to start backend server
   ```
       npm start
   ```

   ---

## Features

- **User Authentication:** Users can sign up, log in, and log out securely. Passwords are hashed for security.
- **Google Login:** Users can sign up and log in using their gmail.

  ![Airbnb Logo](client/public/assets/auth.png)

- **Search Listings:** Users can search for accommodations.

  ![Airbnb Logo](client/public/assets/search.png)

- **View Listings:** Users can view detailed information about each accommodation, including photos, descriptions, amenities.

  ![Airbnb Logo](client/public/assets/view.png)

- **Make Bookings:** Authenticated users can book accommodations for specific dates.

  ![Airbnb Logo](client/public/assets/book.png)

- **Manage Listings:** Hosts can create, edit, and delete their listings.

  ![Airbnb Logo](client/public/assets/manage.png)

- **Responsive Design:** The application is designed to be responsive and work seamlessly across different devices.

  ![Airbnb Logo](client/public/assets/hero.png)

---

## Technologies Used

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **Shadcn:** UI library for styling based on Tailwind CSS
- **JWT:** JSON Web Tokens for secure user authentication.
- **Cloudinary:** Cloud-based image management for storing and serving images.
- **Google Cloud:** For gmail based authentication

---

## Folder Structure

```plaintext
AirBnb/
│
├── api/                         # Backend (Node.js + Express)
│   ├── config/                  # DB config, Cloudinary, etc.
│   ├── controllers/             # API controllers (Auth, Place, Booking)
│   ├── middleware/              # Auth, error handlers
│   ├── models/                  # Mongoose schemas
│   ├── routes/                  # Express routes
│   ├── utils/                   # Helper functions
│   │
│   ├── index.js                 # Backend entry point
│   ├── package.json
│   ├── package-lock.json
│   ├── .env                     # Environment variables (ignored)
│   
│
├── client/                      # Frontend (React)
│   ├── public
│   │
│   ├── src/
│   │   ├── assets/              # Images, icons
│   │   ├── components/          # Reusable components
│   │   ├── lib/                 # Util files
│   │   ├── pages/               # Pages (Home, Place, Booking, Profile)
│   │   ├── styles/              # CSS / Tailwind styles
│   │   ├── utils/               # Utility functions (withAuth, helpers)
│   │   ├── App.jsx
│   │   ├── main.jsx             # React entry point
│   │
│   ├── .env                     # Frontend env vars
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   └── tailwind.config.js
│
├── .gitignore
├── README.md                    # Project overview

```
---

##  Deployment

### Backend (Render)
  - Push repo to GitHub

  - Create a Web Service on Render with backend/ as root

  - Add Environment Variables in Render dashboard (MONGO_URI, JWT_SECRET, etc.)

  - Deploy

### Frontend (vercel)
  - Push repo to GitHub

  - Create a New Project on Vercel with frontend/ as root

  - Deploy the frontend/ folder

  - Update API base URL to point to your deployed backend

--- 

## Author 
  Built by Krupa Patel




