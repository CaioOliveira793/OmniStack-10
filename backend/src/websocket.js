const socketio = require('socket.io');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

function websocketSetup(server) {
	io = socketio(server);

	io.on('connection', (socket) => {
		const { latitude, longitude, techs } = socket.handshake.query

		connections.push({
			id: socket.id,
			coordinates: {
				latitude: Number(latitude),
				longitude: Number(longitude)
			},
			techs: techs.split(',').map(tech => tech.trim())
		})
	})
}

function findConnections(coordinates, techs) {
	return connections.filter(connection => calculateDistance(coordinates, connection.coordinates)
		< 10 && connection.techs.some(item => techs.includes(item)));
}

function sendMessage(to, message, data) {
	to.forEach(connection => {
		io.to(connection.id).emit(message, data);
	});
}

module.exports = { websocketSetup, findConnections, sendMessage };
