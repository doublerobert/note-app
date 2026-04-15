# Note App

A full-stack notes application that lets you create, view, edit, and delete notes. Built with a React frontend and a Node.js/Express backend connected to a MongoDB database.

---

## Features

- View all your notes displayed in a responsive card grid
- Create new notes with a title and optional body text
- Edit existing notes via a modal dialog
- Delete notes with a single click
- Timestamps showing when a note was created or last updated
- Loading state and error handling on the notes page

---

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **React Bootstrap** for UI components
- **React Hook Form** for form state and validation
- **React Icons** for icon components
- Proxied to the backend at `http://localhost:5000`

### Backend
- **Node.js** with **Express 5** and TypeScript
- **Mongoose** for MongoDB object modelling
- **bcrypt** for password hashing (user signup)
- **Morgan** for HTTP request logging
- **dotenv** + **envalid** for environment variable management
- **Nodemon** for development hot-reloading

### Database
- **MongoDB** (local instance or MongoDB Atlas)

---

## Project Structure

```
note-app/
├── backend/
│   └── src/
│       ├── controllers/
│       │   ├── notes.ts      # CRUD logic for notes
│       │   └── users.ts      # User signup logic
│       ├── models/
│       │   ├── note.ts       # Mongoose Note schema
│       │   └── user.ts       # Mongoose User schema
│       ├── routes/
│       │   ├── notes.ts      # /api/notes routes
│       │   └── users.ts      # /api/notes/signup route
│       ├── util/
│       │   └── validateEnv.ts  # Environment variable validation
│       ├── app.ts            # Express app setup and middleware
│       └── server.ts         # Server entry point, connects to MongoDB
└── frontend/
    └── src/
        ├── components/
        │   ├── Note.tsx              # Individual note card component
        │   └── AddEditNoteDialog.tsx # Add/edit modal dialog
        ├── models/
        │   └── note.ts       # TypeScript Note type
        ├── network/
        │   └── notes_api.ts  # API fetch functions
        ├── styles/            # CSS modules
        ├── util/
        │   └── formatDate.ts  # Date formatting helper
        └── App.tsx            # Root component, notes page
```

---

## API Endpoints

| Method | Endpoint                  | Description          |
|--------|---------------------------|----------------------|
| GET    | `/api/notes`              | Fetch all notes      |
| GET    | `/api/notes/:noteId`      | Fetch a single note  |
| POST   | `/api/notes`              | Create a new note    |
| PATCH  | `/api/notes/:noteId`      | Update a note        |
| DELETE | `/api/notes/:noteId`      | Delete a note        |
| POST   | `/api/notes/signup`       | Register a new user  |

---

## Setup & Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, **or** a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string

---

### 1. Clone the repository

```bash
git clone https://github.com/doublerobert/note-app.git
cd note-app
```

---

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```bash
# backend/.env
MONGO_CONNECTION_STRING=mongodb://localhost:27017/note-app
PORT=5000
```

- Replace `mongodb://localhost:27017/note-app` with your MongoDB Atlas connection string if you are not running MongoDB locally.
- You can change the `PORT` value, but make sure to update the frontend proxy in `frontend/package.json` to match.

Start the backend development server:

```bash
npm start
```

The backend will start on `http://localhost:5000`. You should see:

```
Mongoose connected successfully
Server is running on port: 5000
```

---

### 3. Set up the Frontend

Open a new terminal window:

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser. API requests are proxied to the backend on port 5000.

---

### 4. Using the App

1. Open `http://localhost:3000` in your browser.
2. Click **Add New Note** to create a note — a title is required, body text is optional.
3. Click on any note card to edit it.
4. Click the trash icon on a note card to delete it.

---

## Environment Variables

The backend requires the following environment variables defined in `backend/.env`:

| Variable                 | Description                              | Example                                      |
|--------------------------|------------------------------------------|----------------------------------------------|
| `MONGO_CONNECTION_STRING` | MongoDB connection URI                  | `mongodb://localhost:27017/note-app`         |
| `PORT`                   | Port the Express server will listen on  | `5000`                                       |
