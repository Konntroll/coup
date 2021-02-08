const cors = require('cors');
const express = require('express');

const coup = express();
coup.use(cors());

const http = require('http').Server(coup);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('message', (msg) => {
      console.log('message: ' + msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log(`started on port: ${port}`);
});
