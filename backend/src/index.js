const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');
const { websocketSetup } = require('./websocket');

const app = express();
const server = http.Server(app);

websocketSetup(server);

mongoose.connect(
	'mongodb+srv://omnistack:omnistack_pass@cluster0-zvyis.gcp.mongodb.net/week10?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true
	}
);

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);
