const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/arduino', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/ipst', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'IPST.html'));
});
app.get('/esp8266', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ESP8266.html'));
});
app.get('/openkb', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'OPENKB.html'));
});
app.get('/creater', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Creater.html'));
});

module.exports = app;
