$(function(){

    var socket = io();

    socket.on("connect",function(){
        console.log("Connected",socket);
    });

    $sendBtn = $("#send");
    $cmdInput = $("#command");

    $sendBtn.click(function(e){
        var cmd = $cmdInput.val();
        socket.emit("cmd",cmd);
    });

});
