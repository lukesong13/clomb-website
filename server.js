const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for /users
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});

// Route for /gyms
app.get('/gyms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gyms.html'));
});

// Route for /routes
app.get('/routes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'routes.html'));
});

// Route for /climbdetails
app.get('/climbdetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'climb-details.html'));
});

app.listen(port, () => {
    console.log(`Server started. Available at http://localhost:${port}`);
});