# Issue-Tracker Backend

A Simple **Issues–tracker backend** built with **Node.js, Express, Prisma, and PostgreSQL**.

---

## 🚀 Features

- Users
- Repositories
- Issues (open / close)
- Comments on issues
- Relational data with Prisma ORM

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **PostgreSQL**
- **Prisma ORM**

---

## 📁 Project Structure

```
github-issues-app/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── index.js
│   ├── prisma.js
│   └── routes/
│       ├── user.routes.js
│       ├── repository.routes.js
│       ├── issue.routes.js
│       └── comment.routes.js
│
├── .env
├── .gitignore
└── package.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/harshgharsandiya-work/Issue-Tracker.git
cd github-issues-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create `.env` file:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/github_issues"
```

Make sure the PostgreSQL database exists.

---

## 🗄 Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

---

## ▶️ Run the Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Users

- `POST /users` – Create user
- `GET /users` – List users

### Repositories

- `POST /repositories` – Create repository
- `GET /repositories` – List repositories
- `GET /repositories/user/:id` – Repositories by user

### Issues

- `POST /issues` – Create issue
- `GET /issues/repository/:id` – Issues by repository
- `PATCH /issues/:id/status` – Open / Close issue

### Comments

- `POST /comments` – Add comment
- `GET /comments/issue/:id` – Get issue comments

---

## 🔮 Future Improvements

- Authentication (JWT)
- Issue labels & assignees
- Pagination & filtering
- Role-based permissions
- API validation

---

## 📜 References

- [Notion Notes](https://www.notion.so/Prisma-ORM-2f58e6af6ec28006b69ec1a35e8d6132)
- [Prisma Docx](https://www.prisma.io/docs/orm/prisma-client/queries)

---

Built for learning & backend practice.
