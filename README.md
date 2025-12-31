![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Deployment](https://img.shields.io/badge/Deploy-Render-purple)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-orange)

# Airbnb Clone

## Overview

This project is a full-stack web application developed as a clone of Airbnb using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to replicate the core functionality of Airbnb, allowing users to search for accommodations, view details, make bookings, and manage their listings.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rahul4019/airbnb-clone.git

   ```

2. **Install dependencies:**

   Navigate to client directory and install frontend dependencies using yarn

   ```
   yarn install
   ```

   Similary navigate to api folder and install backend dependencies

   ```
   yarn install
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

     #### CLOUDINARY_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

4. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       yarn run dev
   ```
   - Open another terminal, navigate to api directory and run this command to start backend server
   ```
       yarn start
   ```

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









# Zoom Clone (MERN + WebRTC)

A full-stack **Zoom-like video conferencing platform** built with **MERN stack, WebRTC, and Socket.IO**.  
This app supports **real-time video calls, chat messaging, meeting history, and user authentication**.  

Deployed on **Render** with MongoDB Atlas.  

🔗 **Live Demo**: [Frontend Link](https://zoomappfrontend.vercel.app)  
🔗 **Backend API**: [Backend Link](https://zoom-app-backend.onrender.com)  

 ## Demo Credentials

| Username | Password |
|----------|----------|
| demo01   | 12345    |
| demo02   | 12345    |

     
---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started-local-setup)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Author](#author)


## Features
- **Real-Time Video Conferencing** – Peer-to-peer video calls powered by WebRTC  
- **Chat Messaging** – Instant chat during calls using Socket.IO  
- **Authentication** – User signup & login 
- **Meeting History** – Track meetings stored in MongoDB   
- **Secure Deployment** – HTTPS on Render  

---

## Tech Stack
- **Frontend**: React, Context API, Custom css(CSS 3) 
- **Backend**: Node.js, Express.js, Socket.IO  
- **Database**: MongoDB Atlas  
- **Real-Time**: WebRTC + Socket.IO  
- **Deployment**: vercel (Frontend) + Render (Backend)  

---

## Folder Structure

```plaintext
Meetify-Real_Time_App/
│── backend/ # Node.js + Express + Socket.IO API
│ ├── src/
│ │ ├── app.js # Main entry point
│ │ ├── controllers/ # Socket and user controllers
│ │ ├── models/ # MongoDB models
│ │ ├── routes/ # API routes
│ │ └── ...
│ ├── package.json
│ ├── package-lock.json
│ └── .env (ignored)
│
│── frontend/ # React client
│ ├── public/
│ │ ├── index.html
│ │ └── ...
│ ├── src/
│ │ ├── contexts/ # Auth context
│ │ ├── pages/ # Main pages (Home, History, VideoMeet, etc.)
│ │ ├── styles/ # Component styles
│ │ ├── utils/ # Utility functions (withAuth)
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ ├── package.json
│ └── package-lock.json
│
│── .gitignore
│── README.md # Project overview

```
---

## Getting Started (Local Setup)

### 1. Clone the Repository

  ```bash
    git clone https://github.com/krupa-1926/Meetify-Real_Time_App.git
    cd Meetify-Real_Time_App
  ```
    
### 2. Setup Backend

```bash
  cd backend
  npm install
```

  - Create a .env file in backend/:
      - MONGO_URI=your_mongo_connection_string
      - PORT=8000

  - Run the backend:
    ```bash
     node src/app.js
    ```

### 3. Setup Frontend
```bsh
  cd frontend
  npm install
  npm start
```
  - Frontend will run on http://localhost:3000 by default.

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

## Screenshots
- **Landing Page**
  ![Landing](Screenshots/landing.png)

- **Video Call**
  ![Video Call](Screenshots/atCalling.png)
  ![Video Call](Screenshots/lobby.png)
  ![Video Call](Screenshots/callEnd.png)

- **Authentication**
  ![Signup](Screenshots/signup.png)
  ![Login](Screenshots/login.png)

---

## Future Enhancements

  - Record & store meetings

  - Send meeting invites via email

  - Unique meeting links with IDs

---

## Contributing

Pull requests are welcome! For significant changes, please open an issue to discuss first.

--- 

## Author 
  Built by Krupa Patel
