# Educare

## A free, simple, and easy-to-use learning app built with React and Node.js

Educare is a full-stack learning platform that makes education accessible and engaging. Built with React on the frontend and Node.js/Express on the backend, it offers a seamless and intuitive experience. Whether you're a student or self-learner, Educare helps you stay focused and organized.

### Badges

![Built with React & Node.js](https://img.shields.io/badge/Built_with-React%20%26%20Node.js-blue)
![MySQL + Sequelize](https://img.shields.io/badge/MySQL%20%2B%20Sequelize-orange)
![Free and Open Source](https://img.shields.io/badge/Free%20and%20Open%20Source-green)

### Features

- 🎓 Full-stack learning platform
- ⚛️ Modern React frontend with Vite
- 🔐 Secure authentication with JWT and bcrypt
- 🗃️ Backend API with Express and Sequelize (MySQL)
- 📦 Easy setup and beginner-friendly codebase

### Getting Started

Follow these steps to run Educare locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/educare.git
    ```

2. Navigate into the project:
    ```bash
    cd educare
    ```

3. Setup the backend:
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file with DB and JWT settings (see `.env.example`).
    ```bash
    npm start
    ```
    to run the backend server.

4. Setup the frontend:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```
    to start the frontend on Vite.

### How to Use

Once the app is running, navigate to the frontend URL (usually `http://localhost:5173`). Sign up or log in, then start creating learning paths, adding lessons, and exploring the platform.

### Tech Stack

Educare is built using the following technologies:

- **Frontend**: 
    - ⚛️ React
    - ⚡ Vite
    - 🔗 React Router
    - 🎨 Styled Components
    - 💅 Sass

- **Backend**: 
    - 🌐 Node.js
    - 🚀 Express
    - 🗄️ Sequelize
    - 🛢️ MySQL
    - 🔒 JWT
    - 🔐 bcryptjs

- **Other**:
    - 📤 Multer (for file uploads)
    - 🌿 dotenv
    - 🌐 CORS


### Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request. Make sure to follow best practices and write clean code.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Made with 💻 by passionate developers – Happy Learning!
