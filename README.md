# 🚀 Day-5-pra – Backend Development with Express.js

This project is part of my backend development journey, where I practiced building structured APIs using Node.js and Express.js, improving code organization and handling real-world backend concepts.

## ⚙️ Tech Stack
*   **Node.js**: The runtime environment used to execute JavaScript on the server.
*   **Express.js**: The web framework used to handle routing and middleware.
*   **JavaScript (ES6)**: The primary programming language for application logic.
*   **MongoDB**: Integrated for database storage, managed via environment variables.

## 📚 What I Learned
*   **Structuring backend applications properly**: Learned to separate server initialization in `server.js` from the main application logic in `src/app.js`.
*   **Creating multiple API routes**: Gained experience defining endpoints to handle specific client requests.
*   **Handling HTTP methods**: Practiced processing GET, POST, and other standard HTTP methods.
*   **Working with middleware in Express**: Implemented middleware functions to process data during the request-response cycle.
*   **Understanding request-response lifecycle deeply**: Improved my grasp of how the server receives, processes, and responds to client data.
*   **Basics of database integration**: Successfully connected the application to MongoDB Atlas using connection strings.

## ✨ Features
*   **Express server setup**: Clean and modular server initialization.
*   **Multiple API endpoints**: Organized route handling within the `src/` directory.
*   **Middleware usage**: Efficient processing of incoming requests.
*   **JSON request handling**: Capability to parse and respond with structured JSON data.
*   **Clean and scalable project structure**: Follows industry best practices for folder organization.

## 📂 Project Structure
Referencing the **akhilsam-webdev/day-4** file structure template:

```text
Day-5-pra/
│
├── src/
│   └── app.js           # Express application logic, routes, and middleware
├── .env                 # Environment variables (DB URLs, Port)
├── .gitignore           # Prevents tracking of node_modules and .env
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Version locking for dependencies
└── server.js            # Entry point to start the HTTP server
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/akhilsam-webdev/Day-5-pra
cd Day-5-pra
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Server
```bash
node server.js
```

---

## 🔌 API Usage
Run the server and open:
*   `http://localhost:3000`

Test endpoints using:
*   **Browser** (for simple GET requests)
*   **Postman / Thunder Client** (recommended for testing full CRUD operations)

## 👨‍💻 Author
**Akhil Sambasivan**
*   **GitHub**: [https://github.com/akhilsam-webdev](https://github.com/akhilsam-webdev)

## 🔗 Repository
👉 [https://github.com/akhilsam-webdev/Day-5-pra](https://github.com/akhilsam-webdev/Day-5-pra)

## ⭐ Support
If you found this helpful, consider giving a ⭐ to the repo!
