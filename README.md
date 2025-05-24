# Corporate CMS

A Corporate Content Management System (CMS) built using **React** for the frontend and **Node.js (Express)** for the backend.

This project helps companies manage their static content pages like Home, About Us, Contact Us, etc., through a flexible admin UI and dynamic API endpoints.

---

## 🧱 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Styling:** Tailwind CSS (or your preferred CSS framework)
- **Routing:** React Router DOM
- **API Testing:** Postman or Thunder Client
- **Package Management:** npm

---

## 📁 Project Structure

corporate-cms/
├── client/ # React frontend
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── ...
│ └── package.json
│
├── server/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── server.js
│ └── .env
│
├── .gitignore
├── package.json # Root-level scripts
└── README.md

📦 Install Dependencies
npm install            # Installs backend dependencies
cd client
npm install            # Installs frontend dependencies
cd ..

🛠️ Environment Setup
Create a .env file inside the server folder:

PORT=5000

▶️ Run the App (both frontend & backend)
From the root directory:

npm run dev


React: http://localhost:5173

Node API: http://localhost:5000/api

Developer Guide (for collaborators)
Create a feature branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make your changes and commit:

bash
Copy
Edit
git add .
git commit -m "Add: your change description"
Push your branch:

bash
Copy
Edit
git push origin feature/your-feature-name
Create a Pull Request on GitHub

🧩 Future Enhancements
Admin dashboard for CMS control

Auth system (JWT or OAuth)

Rich-text editor for content

Database integration (MongoDB or PostgreSQL)

👨‍💻 Contributors
Lead Devs: Neeraj Rai and Yogesh Raghav (@techzenithlabs)
