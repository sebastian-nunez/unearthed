# UnEarthed

> A simple fullstack application to track your gift list!

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage Local](#usage-local)

## Demo

![demo](./demo.gif)

## Features

- User are able to:
  - View all their gifts
  - Add new gifts
  - Remove gifts
  - Update gifts
- Data is saved on a cloud `PostgresSQL` database
- Deterministic runs between sessions
- `MVC` architecture implemented

## Tech Stack

- **Languages:** JavaScript, Node.js
- **Frontend:** React.js, HTML/CSS, PicoCSS, Vite
- **Backend:** Express.js
- **Database:** PostgresSQL (railway)

## Usage Local

### 1. Run the frontend

- Open the `client` directory: `cd client`
- Install dependencies: `npm install`
- Run the `vite` app: `npm run dev`

### 2. Run the backend

> **Note:** the app uses `railway.app` to host the database. All you need in a `gifts` table

- Rename `.env.template` to `.env` and fill in the different credential fields
- Open the `server` directory: `cd server`
- Install dependencies: `npm install`
- Run the `express.js` app: `npm run start`
