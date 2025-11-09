# 🎨 Collaborative Drawing Canvas (Flam Assignment)

A real-time drawing web app that allows multiple users to sketch together on a shared canvas. Built using Vanilla JavaScript, HTML5 Canvas, Node.js, and Socket.IO, this project focuses on real-time sync and smooth drawing without using any frontend frameworks.

Live Demo

(Add your deployed link here)

Open the link in two or more tabs to see real-time collaboration in action.

Overview

This application enables users to draw simultaneously on the same canvas, with each stroke instantly visible to everyone connected. It can be used for basic remote collaboration, sketching ideas, or understanding real-time WebSocket communication.

Features

Brush and Eraser tools

Color and stroke size control

Real-time drawing sync across users

Shows active users and their cursor positions

Global Undo/Redo for actions done on the shared canvas

Works on desktop and touch devices

Installation & Setup
Requirements

Node.js v14 or above

Steps
git clone https://github.com/YOUR_USERNAME/collaborative-canvas.git
cd collaborative-canvas
npm install
npm start


Now open:

http://localhost:3000


For multi-user testing, open the link in multiple browser windows or devices.

Project Structure
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

How It Works

User drawing events are captured and sent to the server.

The server broadcasts those events to all connected clients.

Each client updates the canvas to reflect the latest strokes.

Undo/Redo is handled on the server to maintain a consistent shared state.

Known Limitations

Drawing is not saved after server restart (no persistence yet)

Undo affects the most recent action globally, not per user

Performance may slow down with too many concurrent users

Future Enhancements

Save and load drawings

More drawing tools (shapes, text)

Export canvas as an image

Private rooms with passwords

License

MIT License
