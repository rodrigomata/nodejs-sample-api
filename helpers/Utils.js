// Utils
const fs = require('fs');

module.exports = {
	save: (data) => {
		const stringData = JSON.stringify(data);
		fs.writeFileSync('users.json', stringData);
	},
	read: () => {
		const rawData = fs.readFileSync('users.json', 'utf8');
		const parsedData = JSON.parse(rawData);
		console.log(parsedData);
		return parsedData;
	}
};