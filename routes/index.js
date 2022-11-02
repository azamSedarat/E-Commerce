const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const routeAPIDefiner = [
    ["/addItem", require("./api/addToCart")],
    ["/payment", require("./api/CheckoutRoute")],
]

const routeViewsDefiner = [
    ["/auth", require("./view/auth")],
    ["/cart", require("./view/cartDetails")],
    ["/product", require("./view/ProductRoute")],
    ["/order", require("./view/OrderRoute")]
]

for(const route of routeAPIDefiner){
    app.use(route[0], route[1]);
}

for(const route of routeViewsDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;