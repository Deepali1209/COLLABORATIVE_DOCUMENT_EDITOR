# COLLABORATIVE_DOCUMENT_EDITOR

**COMPANY** : CODTECH IT SOLUTIONS
**NAME** : DEEPALI SANJAY HIRAVE
**INTERN ID** : CT08HRX
**DOMAIN NAME**: FULL STACK WEB DEVELOPMENT
**BATCH DURATION** : December 30th, 2024 to January 30th, 2025.
**MENTOR NAME:** : Neela Santhosh Kumar
# DESCRIPTION 
**Tools Used**

Frontend Development:
React.js: A JavaScript library for building responsive, dynamic, and component-based user interfaces. React's efficient rendering via the virtual DOM makes it ideal for real-time applications.
Socket.IO Client: Handles WebSocket connections between the frontend and backend for real-time collaboration.

Backend Development:
Node.js: Provides the runtime environment to build a scalable and real-time backend.
Socket.IO Server: Enables WebSocket communication for synchronizing document changes across all connected clients.

Database:
MongoDB: A NoSQL database used for storing document content and user information.
 
 Text Editor or IDE:
Visual Studio Code: Used for writing and debugging the code.

**Development Tools:**
npm (Node Package Manager): Used to install required libraries and dependencies.
Webpack: Bundles JavaScript files and other assets for efficient delivery.

Testing Tools:

Postman: For testing APIs.
Browser Developer Tools: To debug real-time WebSocket connections and inspect elements.

**Resources Used**
Libraries and Dependencies:

React.js: For the dynamic UI.
Socket.IO: For WebSocket-based real-time communication.
 
APIs and Frameworks:

REST APIs built with Express.js for backend functionalities like user authentication, saving documents, and retrieving document history.

WebSocket API for real-time synchronization.
 
**How the Output Was Achieved**

Project Initialization:

The project was bootstrapped using create-react-app, setting up the initial React application structure.
Backend was initialized using Node.js with Express.js and Socket.IO for WebSocket handling.

Frontend Development:
React Components:
A text editor component (using Quill.js or Draft.js) was created to enable rich-text editing.
A collaboration component manages real-time user interactions, showing active collaborators, cursors, and editing regions.
State Management:
React's useState and useEffect hooks manage the editor state and synchronize it with the server via WebSockets.
WebSocket Integration:
The frontend establishes a WebSocket connection with the backend. Changes in the editor (text, formatting, etc.) are sent to the server using socket.emit and reflected across clients using socket.on.

Backend Development:
Document Schema:
MongoDB stores the document content and metadata (e.g., title, last updated time).

 Real-Time Collaboration:

The application uses operational transformation (OT) or conflict-free replicated data types (CRDTs) to handle simultaneous edits without overwriting changes.
User cursors and active regions are tracked and displayed in the editor.

Database Integration:

The MongoDB database stores the documents persistently. When a user opens a document, the editor fetches its content from the database.

Testing and Debugging:

The application was tested for performance and edge cases, such as network disconnections, conflict resolution, and large documents.

Debugging tools and Socket.IO logs ensured smooth real-time communication.
**Sample Output**
Single User Editing:
A user types into the rich-text editor, and changes are saved in the database in real time.

Collaborative Editing:
Multiple users edit the same document.
Each user sees the changes of others in real time, along with their cursors and editing regions.

This implementation serves as a robust foundation for future enhancements like role-based permissions, offline support, and advanced rich-text editing capabilities.


![Image](https://github.com/user-attachments/assets/01393c64-58f4-4392-be8a-9bd0c4099a2a)
 
