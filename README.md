# Welcome to Project Setup

## 🔐 User Authentication API by Asif_saif_ali

- A secure and minimal Node.js backend project for **user authentication**, built with:

- **Express.js** for the server
- **MongoDB** with Mongoose for the database
- **JWT (JSON Web Tokens)** for authentication
- **bcrypt** for password hashing

---

## 🚀 Features

- ✅ User registration (`/register`)
- ✅ User login (`/login`)
- ✅ Password encryption with `bcryptjs`
- ✅ JWT-based authentication & protected routes
- ✅ Modular code with routes and middleware

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv (for environment variables)

---

## 📁 Project Structure

- ├── .git/                  # Git configuration
- ├── config/                # App configuration (e.g., DB connection, environment settings)
- ├── controller/            # Handles request logic, talks to services
- ├── middleware/            # Middleware for auth, validation, error handling, etc.
- ├── model/                 # Mongoose schemas and models
- ├── node_modules/          # Project dependencies
- ├── repository/            # Data access layer (DB queries, Mongo logic)
- ├── routes/                # API route definitions
- ├── service/               # Business logic layer (calls repositories)
- ├── utils/                 # Utility functions (e.g., token generation, hashing)
- ├── .env                   # Environment variables (secrets, DB URI, JWT key)
- ├── .gitignore             # Ignore files for Git
- ├── index.js               # Application entry point
- ├── package-lock.json      # Dependency tree lock
- ├── package.json           # Project metadata and dependencies
- └── README.md              # Project documentation

## 📁 Project Architecture

This backend follows a **Modular MVC pattern** with separation of concerns:

- `routes` ➜ defines API endpoints  
- `controller` ➜ handles HTTP logic  
- `service` ➜ contains core business rules  
- `repository` ➜ manages database operations  
- `middleware` ➜ handles authentication, error handling  
- `utils` ➜ stores reusable helper functions  
- `config` ➜ holds configuration like DB, constants  

## 🚀 Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the project**  
   Clone the repository to your local machine:
   ```bash
   git clone <your-repo-url>

2. **Install dependencies**
    - Navigate to the root directory of the cloned project and run:

- npm install

3. **Create a .env file**
   - In the root directory, create a .env file and add the following:

    If dotenv.config() does not work, use:
####   dotenv.config({ path: path.resolve(__dirname, '../../.env') });

4.  **Add configuration**
Inside the src/config folder, create a file named config.json and add the necessary configuration code.