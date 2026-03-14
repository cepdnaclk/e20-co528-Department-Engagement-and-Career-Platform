---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: E20-CO528-Department-Engagement-and-Career-Platform
title: Department Engagement & Career Platform (DECP)
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# DEPARTMENT ENGAGEMENT & CAREER PLATFORM (DECP)

---

## Team
- E/20/158, Chamuditha Jananga, [e20158@eng.pdn.ac.lk](mailto:e20158@eng.pdn.ac.lk)
- E/20/248, Tharindu Mapagedara, [e20248@eng.pdn.ac.lk](mailto:e20248@eng.pdn.ac.lk)
- E/20/453, Janith Yogesh, [e20453@eng.pdn.ac.lk](mailto:e20453@eng.pdn.ac.lk)
- E/20/300, Tharushika Prasadinie, [e20300@eng.pdn.ac.lk](mailto:e20300@eng.pdn.ac.lk)

## Table of Contents
1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Tech Stack](#tech-stack)
5. [Links](#links)

---

## Introduction

The Department Engagement & Career Platform (DECP) is a comprehensive networking platform designed for the Department of Computer Engineering at the University of Peradeniya. It connects students, alumni, faculty, and industry partners through social feeds, job boards, events, research collaboration, and real-time messaging.

## Architecture

The application uses a **Microservices Architecture** with three client layers:

```text
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

## Links

- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

<style>
/* Custom Table Styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(169, 167, 167, 0.15);
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
table thead {
  background-color: #f0f0f0; /* Ash color for header */
  color: #333333; /* Darker text for contrast on ash */
  text-align: left;
}
table th,
table td {
  padding: 12px 15px;
}
table tbody tr {
  background-color: #ffffff; /* White background for regular rows */
  border-bottom: 1px solid #dddddd;
}
table tbody tr:nth-of-type(even) {
  background-color: #f9f9f9; /* Very light ash for alternate rows */
}
table tbody tr:last-of-type {
  border-bottom: 2px solid #b0b0b0; /* Ash color for bottom border */
}
@media (prefers-color-scheme: dark) {
  table { box-shadow: 0 0 20px rgba(173, 164, 164, 0.05); }
  table thead { background-color: #333333; color: #f0f0f0; } /* Dark ash header, light text */
  table tbody tr { background-color: #1a1a1a; border-bottom: 1px solid #444444; } /* Dark background for rows */
  table tbody tr:nth-of-type(even) { background-color: #2a2a2a; } /* Slightly lighter dark alternate rows */
  table tbody tr:last-of-type { border-bottom: 2px solid #666666; } /* Dark ash bottom border */
}
</style>

[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
