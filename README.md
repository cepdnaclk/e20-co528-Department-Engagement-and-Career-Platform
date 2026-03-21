# Department Engagement & Career Platform (DECP)

The Department Engagement & Career Platform (DECP) is a comprehensive networking platform designed for the Department of Computer Engineering at the University of Peradeniya. It connects students, alumni, faculty, and industry partners through social feeds, job boards, events, research collaboration, and real-time messaging.

## Team Members
| Registration No. | Name | Email |
|---|---|---|
| E/20/158 | Chamuditha Jananga | [e20158@eng.pdn.ac.lk](mailto:e20158@eng.pdn.ac.lk) |
| E/20/248 | Tharindu Mapagedara | [e20248@eng.pdn.ac.lk](mailto:e20248@eng.pdn.ac.lk) |
| E/20/453 | Janith Yogesh | [e20453@eng.pdn.ac.lk](mailto:e20453@eng.pdn.ac.lk) |
| E/20/300 | Tharushika Prasadinie | [e20300@eng.pdn.ac.lk](mailto:e20300@eng.pdn.ac.lk) |

## Architecture

The application uses a **Microservices Architecture** with three client layers:

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  React Web   │   │ React Native │   │   (Future)   │
│  Frontend    │   │  Mobile App  │   │  Flutter App │
└──────┬───────┘   └──────┬───────┘   └──────┬───────┘
       │                  │                  │
       └──────────┬───────┴──────────────────┘
                  ▼
         ┌────────────────┐
         │  API Gateway   │  Port 5000
         └───────┬────────┘
    ┌────┬───┬───┼───┬────┬────┬────┐
    ▼    ▼   ▼   ▼   ▼    ▼    ▼    ▼
  Auth Feed Jobs Events Research Msg Notif Analytics
  5001 5002 5003  5004   5005  5006 5007   5008
                  │
              MongoDB Atlas
```

### Backend Microservices
| Service | Port | Description |
|---|---|---|
| API Gateway | 5000 | Routes requests to downstream services |
| Auth Service | 5001 | Registration, login, JWT, profiles |
| Feed Service | 5002 | Posts, likes, comments |
| Jobs Service | 5003 | Job/internship listings, applications |
| Events Service | 5004 | Events, RSVP, workshops |
| Research Service | 5005 | Projects, collaborators, documents |
| Messaging Service | 5006 | Real-time chat via Socket.IO |
| Notifications Service | 5007 | In-app notification alerts |
| Analytics Service | 5008 | Admin dashboard statistics |

## Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org/))
- **MongoDB Atlas** account (or local MongoDB)
- **Expo Go** app on your phone (for mobile testing)

## Setup & Run
### Run with Docker Compose
Create a `.env` file in the project root with:
```env
MONGODB_URI=
JWT_SECRET=
JWT_REFRESH_SECRET=
API_BASE_URL=
FRONTEND_PORT=
```
Then start the stack:
```bash
docker compose up --build
```
### Step 1: Configure Environment
Edit `backend/.env` with your MongoDB Atlas connection string:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```
### Step 2: Start Backend Microservices
```bash
cd backend
npm install
npm run dev
```
All 9 processes (API Gateway + 8 microservices) start concurrently.
### Step 3: Seed Database (first time only)
```bash
cd backend
node seed.js
```
This creates demo accounts:
- **Admin**: admin@eng.pdn.ac.lk / admin123
- **Alumni**: alumni@eng.pdn.ac.lk / alumni123
- **Student**: e20158@eng.pdn.ac.lk / student123

### Step 4: Start Web Frontend
```bash
cd frontend
npm install
npm run dev
```
Open **http://localhost:5173** in your browser.
### Step 5: Start Mobile App (optional)
```bash
cd mobile
npm install
npx expo start
```
Scan the QR code with **Expo Go** on your phone.

> **Note:** Update `mobile/src/api/axios.js` with your machine's local IP address if testing on a physical device.

## Tech Stack
| Layer | Technology |
|---|---|
| Web Frontend | React.js, Vite, CSS3 |
| Mobile App | React Native, Expo |
| API Gateway | Express.js, http-proxy-middleware |
| Microservices | Express.js, Mongoose |
| Database | MongoDB Atlas |
| Authentication | JWT (access + refresh tokens) |
| Real-time | Socket.IO |
| File Uploads | Multer |

## Project Structure
```
├── backend/
│   ├── api-gateway/          # Central router (Port 5000)
│   ├── auth-service/         # Port 5001
│   ├── feed-service/         # Port 5002
│   ├── jobs-service/         # Port 5003
│   ├── events-service/       # Port 5004
│   ├── research-service/     # Port 5005
│   ├── messaging-service/    # Port 5006
│   ├── notifications-service/# Port 5007
│   ├── analytics-service/    # Port 5008
│   ├── shared/               # Shared models, middleware, config
│   ├── seed.js               # Database seeder
│   └── .env                  # Environment variables
├── frontend/                 # React.js web client
├── mobile/                   # React Native mobile client
│   ├── src/
│   │   ├── api/              # Axios API client
│   │   ├── context/          # Auth context
│   │   ├── screens/          # Login, Feed, Jobs, Events, Profile
│   │   └── navigation/       # Stack & Tab navigators
│   └── App.js
└── docs/                     # Project documentation
```
## Links
- [Project Repository](https://github.com/cepdnaclk/E20-CO528-Department-Engagement-and-Career-Platform)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)
