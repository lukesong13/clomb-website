// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;

// // Serve static files from the directory containing index.html
// app.use(express.static(path.join(__dirname)));

// app.listen(port, () => {
//     console.log(`Server started. Available at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (JS, CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Route for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for /users
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/users.html'));
});

// Route for /gyms
app.get('/gyms', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/gyms.html'));
});

// Route for /routes
app.get('/routes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/routes.html'));
});

// Route for /climbdetails
app.get('/climbdetails', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/climbdetails.html'));
});

app.listen(port, () => {
    console.log(`Server started. Available at http://localhost:${port}`);
});