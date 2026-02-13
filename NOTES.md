# Node.js & Express Server Notes

## Table of Contents
1. [Creating a Server Step by Step](#creating-a-server-step-by-step)
2. [Starting the Server Step by Step](#starting-the-server-step-by-step)
3. [Common Commands](#common-commands)
4. [Troubleshooting](#troubleshooting)

---

## Creating a Server Step by Step

### Step 1: Initialize a New Project
```bash
# Create a new folder for your project
mkdir my-server
cd my-server

# Initialize a new Node.js project
npm init -y
```

### Step 2: Install Required Dependencies
```bash
# Install Express (web framework)
npm install express

# For development, you might also want:
npm install --save-dev nodemon
```

### Step 3: Create the Server File
Create a file named `server.js` and add the following code:

```javascript
const express = require('express');

const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
```

### Step 4: Configure package.json
Make sure your `package.json` has the proper configuration:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

### Step 5: Create Additional Routes (Optional)
```javascript
// POST route
app.post("/api/data", (req, res) => {
  res.json({ message: "Data received" });
});

// GET route with parameter
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: "John Doe" });
});
```

---

## Starting the Server Step by Step

### Method 1: Using node command
```bash
# Make sure you're in the project directory
cd your-project-folder

# Start the server
node server.js
```

### Method 2: Using npm scripts (Recommended)
```bash
# Start with the start script
npm start

# Or for development with auto-reload
npm run dev
```

### Method 3: Using nodemon for development
```bash
# Install nodemon globally (optional)
npm install -g nodemon

# Run with nodemon
nodemon server.js
```

### Method 4: Using npx
```bash
# Run without installing
npx nodemon server.js
```

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm init -y` | Initialize a new Node.js project |
| `npm install express` | Install Express framework |
| `npm install` | Install all dependencies from package.json |
| `node server.js` | Start the server |
| `npm start` | Start server using npm script |
| `npm run dev` | Start server in development mode |
| `nodemon server.js` | Start server with auto-reload |
| `Ctrl + C` | Stop the server |

---

## Troubleshooting

### Port Already in Use
If you get "Port already in use" error:
```bash
# Find and kill the process using the port
# On Windows:
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :4000
kill -9 <PID>
```

### Module Not Found
If you get "Cannot find module" error:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Permission Errors
```bash
# On Mac/Linux, you might need to use sudo
sudo npm start
```

---

## Project Structure Example
```
my-server/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

*Last Updated: 13th Feb 2026*
