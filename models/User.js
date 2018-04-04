// User Model
const Utils = require('../helpers/Utils');

module.exports = {
	findAll: () => {
		const users = Utils.read();
		if(users) return users;
		return 'No Users registered';
	},
	findOne: (id) => {
		const users = Utils.read();
		return users.filter(user => user.id == id);
	},
	add: (user) => {
		const users = Utils.read();
		user.id = users.length + 1;
		users.push(user);
		Utils.save(users);
	},
	update: (user, id) => {
		const users = Utils.read();
		const newUsers = Object.assign(users, user);
		Utils.save(newUsers);
	},
	delete: (id) => {
		const users = Utils.read();
		const userToDelete = users.filter(user => user.id == id);
		users[userToDelete] = null;
		Utils.save(users);
	}
};