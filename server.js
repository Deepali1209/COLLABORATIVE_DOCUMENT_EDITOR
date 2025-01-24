// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let documents = {}; // Store documents in memory (use DB for persistence)

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-document", (docId) => {
    socket.join(docId);
    if (!documents[docId]) documents[docId] = "";
    socket.emit("load-document", documents[docId]);
  });

  socket.on("edit-document", ({ docId, content }) => {
    documents[docId] = content; // Update in-memory document
    socket.to(docId).emit("update-document", content); // Broadcast changes
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Server listening on http://localhost:3001");
});
