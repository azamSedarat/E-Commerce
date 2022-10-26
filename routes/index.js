const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


const routeViewsDefiner = [
    ["/view", require("./view/register")],
    ["/auth", require("./view/login")],
    ["/home", require("./view/productList")],
    ["/product", require("./view/productDetails")],
    ["/auth", require("./view/register")],
    ["/checkout", require("./api/checkout")],
    ["/checkout", require("./api/checkout")]
]



for(const route of routeViewsDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;