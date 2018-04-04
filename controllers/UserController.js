// User Controller
const User = require('../models/User');

module.exports = {
	getAllUsers: (req, res) => {
		res.json(User.findAll());
	},

	getUser: (req, res) => {
		const { id } = req.params;
		res.json(User.findOne(id));
	},

	putUser: (req, res) => {
		const { id, user } = req.params;
		User.update(user, id);
		res.send(204);
	}

	postUser: (req, res) => {
		const { id, user } = req.params;
		User.add(user, id);
		res.send(204);
	},

	deleteUser: (req, res) => {
		const { id } = req.params;
		User.delete(id);
		res.send(202);
	}
};