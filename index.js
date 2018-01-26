const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(7001);

app.use(express.static("./public"));

io.on("connection",function(socket){
    var socketid = socket.id;
    console.log(`Client connected ${socketid}`);
});

console.log("Server port 7001");