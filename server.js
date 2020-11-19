const express = require("express");
const path = require("path");
const https = require("https");
const http = require("http");
const fs = require("fs");

// const port = process.env.PORT || 8080;
const portHttps = 443;
const portHttp = 80;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
	res.render("index.html");
});

https
	.createServer(
		{
			key: fs.readFileSync("./SSL/private.key"),
			cert: fs.readFileSync("./SSL/certificate.crt"),
		},
		app
	)
	.listen(portHttps, () => {
		console.log(`listen on https://localhost:${portHttps}`);
	});

http.createServer(app).listen(portHttp, function () {
	console.log(`listen on http://localhost:${portHttp}`);
});
