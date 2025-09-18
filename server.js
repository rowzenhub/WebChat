const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Yeni kullanıcı bağlandı");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server çalışıyor: ${port}`));