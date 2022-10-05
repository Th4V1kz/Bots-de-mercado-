require("dotenv").config();
const WebSocket = require("ws");
const axios = require("axios");
const crypto = require("crypto");

const ws = new WebSocket(process.env.STREAM_URL + "btcusdt@bookTicker");

let isOpened = false;

ws.onmessage = async (event) => {
    const obj = JSON.parse(event.data);
    console.log("Price" + obj.a);
    console.log("Symbol:" + obj.s);

    const price = parseFloat(obj.a);
    if(price < 19000 && !isOpened) {
        console.log("comprar!");
        isOpened = true;
    }
    else if(price > 21000 && isOpened) {
        console.log("vender!");
        isOpened = false;
    }
}
//criar function para new order//