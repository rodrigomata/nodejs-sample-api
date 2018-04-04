// User Model
const Utils = require('../helpers/Utils');

module.exports = {
	findAll: () => {
		return Utils.read();
	},
	findOne: (id) => {
		const users = Utils.read();
		return users.filter(user => user.id === id);
	},
	add: (user) => {
		const users = Utils.read();
		user.id = Object.entries(users).length + 1;
		users.append(user);
		Utils.save(users);
	},
	update: (user, id) => {
		const users = Utils.read();
		const newUsers = Object.assign(users, user);
		Utils.save(newUsers);
	},
	delete: (id) => {
		const users = Utils.read();
		const userToDelete = users.filter(user => user.id === id);
		users[userToDelete] = null;
		Utils.save(users);
	}
};