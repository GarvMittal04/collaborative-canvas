# Collaborative Drawing Canvas

A real-time drawing web application that allows multiple users to sketch together on a shared canvas. Built using Vanilla JavaScript, HTML5 Canvas, Node.js, and Socket.IO, this project focuses on smooth real-time collaboration without using any frontend frameworks.

---

## 🚀 Live Demo

https://collaborative-canvas-ptv4.onrender.com/

Open the link in multiple tabs or devices to test real-time collaboration.

---

## 📌 Overview

This application enables users to draw on the same canvas at the same time, with every action instantly reflected across all clients. It is ideal for collaborative sketching, idea sharing, and learning real-time WebSocket communication.

---

## ✨ Features

- Brush and eraser tools  
- Adjustable color and stroke size  
- Real-time synchronized drawing across users  
- Displays active users and their cursor positions  
- Global undo/redo for shared canvas actions  
- Supports desktop and touch devices  

---

## 🛠️ Installation & Setup

### Requirements
- Node.js v14 or above

### Steps to Run

```bash
git clone https://github.com/GarvMittal04/collaborative-canvas.git
cd collaborative-canvas
npm install
npm start
http://localhost:3000

collaborative-canvas/
├── client/
│   ├── index.html
│   ├── style.css
│   ├── canvas.js
│   ├── websocket.js
│   └── main.js
├── server/
│   ├── server.js
│   ├── rooms.js
│   └── drawing-state.js
├── package.json
└── README.md
