const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

const routeAPIDefiner = [
    ["/api", require("./api/register")],

]

const routeViewsDefiner = [
    ["/view", require("./view/register")],
]

for(const route of routeAPIDefiner){
    app.use(route[0], route[1]);
}

for(const route of routeViewsDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;
