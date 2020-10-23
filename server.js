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

https
	.createServer(
		{
			key: fs.readFileSync("private.key"),
			cert: fs.readFileSync("certificate.crt"),
		},
		app
	)
	.listen(port, "0.0.0.0", () => {
		console.log(`listen on https://localhost:${port}`);
	});
