let server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3231;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('coding event', function (data) {
    socket.broadcast.emit('receive code', data);
  });
});

server.listen(PORT, () => {
  console.log("Server connected to port: " + PORT);
});

