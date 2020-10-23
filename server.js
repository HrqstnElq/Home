const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
	res.render("index.html");
});

app.listen(port, () => {
	console.log(`listen on https://localhost:${port}`);
});
