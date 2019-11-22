var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

http.listen(3636, function() {
  console.log("listening on *:3636");
});

io.on("connection", function(socket) {
  console.log("Fulaninho entrou!");
  // Escuta evento muda cor vindo do Front
  socket.on("muda cor", function(msg) {
    console.log("Cor: " + msg);
    // Emite um evento PARA o Front
    io.emit("muda cor", msg);
  });
  socket.on("disconnect", function() {
    console.log("Fulaninho vazou!!");
  });
});
