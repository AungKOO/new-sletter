const express = require('express'); 
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server is running at port 3000"));