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
		const { id } = req.params;
		const { name } = req.body;
		const user = { name };
		User.update(user, id);
		res.send(204);
	},

	postUser: (req, res) => {
		const { name } = req.body;
		const user = { name };
		User.add(user);
		res.send(204);
	},

	deleteUser: (req, res) => {
		const { id } = req.params;
		User.delete(id);
		res.send(202);
	}
};