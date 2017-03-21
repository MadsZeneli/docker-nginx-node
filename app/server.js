const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

module.exports = app;