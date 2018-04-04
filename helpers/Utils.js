// Utils
const fs = require('fs');

module.exports = {
	save: (data) => {
		const stringData = JSON.stringify(data);
		fs.writeFileSync('users.json', stringData);
	},
	read: () => {
		const rawData = fs.readFileSync('users.json');
		return JSON.parse(rawData);
	}
};