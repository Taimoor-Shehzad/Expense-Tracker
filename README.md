# Expense Tracker

A modern expense tracking application built with React Native and Expo on the frontend, paired with an Express API and PostgreSQL backend for managing user transactions securely and efficiently.

## Overview

Expense Tracker helps users record income and expenses, review their financial activity, and quickly understand their spending patterns. The app supports:

- Add income and expense transactions
- Categorize entries such as Food, Shopping, Bills, Transport, Entertainment, and Other
- View a live summary of totals
- See recent transaction history
- Sign in and sign out with Clerk authentication
- Keep the backend protected with API rate limiting and transaction persistence

## Features

- User authentication with Clerk
- Expense and income tracking in a clean mobile UI
- Dynamic transaction summaries by total balance, income, and expenses
- Transaction filtering by category and recent entries
- Persistent storage with Neon PostgreSQL
- Rate-limited backend API for reliability and abuse prevention
- Mobile-first design built with Expo and React Native

## Tech Stack

### Frontend
- React Native
- Expo
- Expo Router
- Clerk for authentication
- TypeScript

### Backend
- Node.js
- Express
- PostgreSQL via Neon
- Upstash Redis for rate limiting

## Project Structure

```text
Expense-Tracker/
├── app/
│   └── Expense-Tracker/      # Expo mobile app
│       ├── app/              # App screens and routes
│       ├── assets/           # Images and styles
│       ├── components/       # Reusable UI components
│       ├── constants/        # API and theme config
│       ├── hooks/            # Data fetching hooks
│       ├── package.json      # Frontend dependencies and scripts
│       └── README.md         # App-level project notes
├── backend/                  # Express API server
│   ├── src/                  # Server, routes, controllers, middleware
│   ├── package.json          # Backend dependencies and scripts
│   └── vercel.json           # Vercel deployment config
├── .gitignore
└── README.md                # Project overview and setup guide
```

## Frontend App

The mobile application is located in `app/Expense-Tracker` and provides the user interface for creating, viewing, and managing transactions.

### Key screens
- Sign in / sign up
- Dashboard overview
- Add new transaction
- Recent transactions list

## Backend API

The backend service in `backend/` exposes transaction operations such as:

- `GET /api/transactions/:userId` — fetch all transactions for a user
- `GET /api/transactions/summary/:userId` — get summary totals
- `POST /api/transactions` — create a transaction
- `DELETE /api/transactions/:userId` — delete a transaction

The server initializes a PostgreSQL table for transactions and uses Upstash rate limiting to protect the API.

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Expo CLI
- A Clerk project for authentication
- A Neon PostgreSQL database URL
- Upstash Redis credentials for rate limiting

### 1. Install frontend dependencies

```bash
cd app/Expense-Tracker
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Run the app

```bash
cd app/Expense-Tracker
npx expo start
```

### 4. Run the backend

```bash
cd backend
npm run dev
```

## Environment Variables

Set up the required environment variables in the backend project, including:

```bash
DATABASE_URL=your_neon_database_url
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
PORT=5001
```

The frontend app also uses a live API URL configured in `app/Expense-Tracker/constants/api.ts`.

## Why this project?

This project demonstrates a full-stack mobile app workflow where a modern React Native UI communicates with a lightweight backend service to manage real user data. It is a strong example of combining authentication, transaction logic, database operations, and deployment-ready architecture in a single application.

## Contributing

Contributions are welcome. If you'd like to improve the UI, add analytics, build filters, or expand the transaction model, feel free to open a pull request or suggest features.

## License

This project does not currently include an explicit license file. If you plan to distribute or reuse the project publicly, consider adding one such as MIT or Apache 2.0.
