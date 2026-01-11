# Employee Task Tracker

A full-stack Employee Task Management System built with **Node.js, Express, Prisma ORM, MySQL, React**, and **Docker**.  
Admins can assign tasks to employees, and employees can update their task status.

---

## 🚀 Tech Stack

### Backend
- Node.js **22**
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication
- bcrypt
- Docker & Docker Compose

### Frontend (upcoming)
- React
- Axios
- React Router

---

## ✅ Implemented Features (So Far)

- Dockerized backend
- MySQL running in Docker
- Prisma ORM with migrations
- User & Task schema
- Authentication APIs (Register & Login)
- JWT-based authentication
- Role-based authorization (ADMIN / EMPLOYEE)
- Centralized API response handler

---

## 📁 Project Structure
```
employee-task-tracker/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── role.middleware.js
│   │   ├── modules/
│   │   │   └── auth/
│   │   ├── utils/
│   │   │   ├── jwt.js
│   │   │   └── response.js
│   │   ├── app.js
│   │   └── server.js
│   ├── Dockerfile
│   └── .env
│  
├── frontend/
│   ├── src/
│   ├── api/
│   	└── axios.js
├── auth/  
│   └── auth.js
├── pages/
│   ├── Login.jsx
│   ├── AdminDashboard.jsx
│   └── EmployeeDashboard.jsx
├── routes/
│   └── ProtectedRoute.jsx
├── App.jsx
└── main.jsx
├── docker-compose.yml
└── README.md
```

## ⚙️ Prerequisites

- Docker Desktop (WSL2 enabled on Windows)
- Git
- Node.js (optional – only for local Prisma usage)

---

## 🔐 Environment Variables

Create a file at `backend/.env`:

```env
PORT=5000
DATABASE_URL="mysql://root:root@db:3306/task_tracker"
JWT_SECRET=supersecretkey
```



🐳 How to Start the Project

1️⃣ Start backend & database

From the project root:
```
docker compose up --build
```
This starts:

	•	Backend (Node.js + Prisma)
	•	MySQL database
---

2️⃣ Verify containers

```
docker ps
```
You should see:

	•	task-backend
	•	task-mysql
---

3️⃣ Run Prisma migrations (Important)

Since MySQL runs inside Docker, run Prisma inside the backend container:
```docker
docker exec -it task-backend sh
```
Then
```
npx prisma migrate dev --name init
npx prisma generate
```

Exit the container:
```
exit
```

---

4️⃣ Test backend

Open browser:
```url
http://localhost:5000/health
```
Expected response:
```json
{
  "status": "API running 🚀"
}

```

## 🧪 Useful Commands
```
docker compose up --build
docker compose down
docker ps
docker exec -it task-backend sh
npx prisma migrate dev
npx prisma studio
```
⸻

# 👨‍💻 Author

Aashish Gulshan

Full-Stack Developer
