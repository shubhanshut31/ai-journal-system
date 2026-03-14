# AI Journal System

## Overview

The **AI-Assisted Journal System** allows users to write journal entries after completing immersive nature sessions (forest, ocean, or mountain).
The system stores journal entries, analyzes emotional tone using an LLM, and generates insights about the user's mental state over time.

This project demonstrates:

* API design
* LLM integration
* Full-stack development
* Data aggregation and insights

---

# Features

### 1. Journal Entry Creation

Users can create a journal entry with:

* ambience (forest, ocean, mountain)
* journal text

Entries are stored in the database.

### 2. Emotion Analysis (LLM)

Users can analyze journal entries using an LLM to extract:

* emotion
* keywords
* summary

### 3. View Previous Entries

Users can view their previously stored journal entries.

### 4. Insights Dashboard

The system generates insights such as:

* total journal entries
* most common emotion
* most used ambience
* recent keywords

---

# Tech Stack

## Backend

* Node.js
* Express.js

## Frontend

* React.js

## Database

* MongoDB

## AI Model

* LLM via API (Groq / OpenAI compatible)

---

# Project Structure

```
ai-journal-system
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── services
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── api
│   │   └── App.js
│
├── README.md
└── ARCHITECTURE.md
```

---

# API Endpoints

## Create Journal Entry

POST /api/journal

Example request:

```
{
"userId": "123",
"ambience": "forest",
"text": "I felt calm today after listening to the rain."
}
```

---

## Get Journal Entries

GET /api/journal/:userId

Returns all entries for a user.

---

## Analyze Journal Text

POST /api/journal/analyze

Request:

```
{
"text": "I felt calm today after listening to the rain"
}
```

Response:

```
{
"emotion": "calm",
"keywords": ["rain","nature","peace"],
"summary": "User experienced relaxation during the forest session"
}
```

---

## Insights API

GET /api/journal/insights/:userId

Example response:

```
{
"totalEntries": 8,
"topEmotion": "calm",
"mostUsedAmbience": "forest",
"recentKeywords": ["focus","nature","rain"]
}
```

---

# Setup Instructions

## 1. Clone Repository

```
git clone https://github.com/your-username/ai-journal-system.git
cd ai-journal-system
```

---

## 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
GROQ_API_KEY=your_api_key
```

Run server:

```
npm run dev
```

---

## 3. Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

Backend runs at:

```
http://localhost:5000
```

---

# Future Improvements

* Emotion trend charts
* Authentication for users
* LLM streaming responses
* Redis caching
* Docker deployment

---

# Author

Shubhanshu Tiwari
