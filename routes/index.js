const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const routeAPIDefiner = [
    ["/addItem", require("./api/addToCart")],
    ["/payment", require("./api/checkout")],
]

const routeViewsDefiner = [
    ["/auth", require("./view/auth")],
    ["/cart", require("./view/cartDetails")],
    ["/product", require("./view/productDetails")],
    ["/product", require("./view/productList")]
]

for(const route of routeAPIDefiner){
    app.use(route[0], route[1]);
}

for(const route of routeViewsDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;