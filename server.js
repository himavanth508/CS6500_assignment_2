const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.static("public")); // Serve static files

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Load SSL certificate and key
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

// Start HTTPS server
https.createServer(options, app).listen(443, () => {
    console.log("Secure server running on https://localhost");
});
