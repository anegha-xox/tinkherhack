# 🐯 AlumLink | RIT 
**Bridging the gap between RIT students and alumni through meaningful mentorship.**

AlumLink is a lightweight, full-stack networking platform designed specifically for the RIT community. It allows students to register with their university credentials, select their technical interests, and connect with experienced mentors from the alumni network.

---

## ✨ Key Features
* **RIT Authentication:** Domain-restricted registration ensures only `@rit.edu` users can access student features.
* **Dual-Portal System:** Dedicated workflows for **Students** (discovery-focused) and **Mentors** (directory-focused).
* **Glassmorphism UI:** A modern, high-contrast interface built with Tailwind CSS and Lucide icons.
* **Interest Tagging:** Match students and mentors based on shared domains like AI, Cloud, and UI/UX.
* **Secure Mentor Access:** Alumni-specific access codes to protect the student directory.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+).
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB via Mongoose ODM.
* **Icons:** Lucide-JS.
* **Typography:** Plus Jakarta Sans.

---

## 🚀 Getting Started

### 1. Prerequisites
* Node.js (v14 or higher)
* MongoDB Atlas account or local MongoDB instance

### 2. Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/alumlink-rit.git](https://github.com/your-username/alumlink-rit.git)
    cd alumlink-rit
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000
    ```
    project structure
    ├── server.js           # Express backend & API routes
├── index.html          # Single-page frontend architecture
├── .env                 # Environment variables (not tracked)
└── .gitignore          # File to ignore node_modules and .env
API endpoints
Method Endpoint Description
POST /api/register/student Registers a new student (RIT email required).
POST /api/login/mentor Validates alumni via access code (RIT2026).
GET /api/mentors Fetches all available alumni mentors.
GET /api/students Fetches student directory for mentors.
Roadmap
​[ ] Implement JWT for persistent sessions.
​[ ] Add real-time messaging using Socket.io.
​[ ] Build an automated matching algorithm based on interest scores.
​[ ] Add image upload for profile pictures.
​Developed with ❤️ for the RIT Community.

### 3. Running the App
```bash
node server.js# tinkherhack
