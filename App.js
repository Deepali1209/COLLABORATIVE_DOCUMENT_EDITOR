// App.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const [content, setContent] = useState("");
  const [docId] = useState("default-doc"); // Static document ID for simplicity

  useEffect(() => {
    socket.emit("join-document", docId);

    socket.on("load-document", (data) => {
      setContent(data);
    });

    socket.on("update-document", (data) => {
      setContent(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [docId]);

  const handleChange = (e) => {
    setContent(e.target.value);
    socket.emit("edit-document", { docId, content: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Collaborative Document Editor</h1>
      <textarea
        value={content}
        onChange={handleChange}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
}

export default App;
