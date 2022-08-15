const express = require('express');
const EventEmitter = require('events');

const app = express();

const event = new EventEmitter();

event.on("countAPI", () => {
    count++;
    console.log("event called");
})

app.get('/', (req, res) => {
    res.send("api called");
    event.emit("countAPI");
})

app.listen(8000);