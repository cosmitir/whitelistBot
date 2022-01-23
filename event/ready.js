const config = require("../config.json");

module.exports = {
	name: 'ready',
	once: true,
	execute(bot) {
        bot.editStatus(config.status, {name: config.activitiesName, type: config.activitiesType});
        console.log("Action | AuthorID | AuthorName | Message");
	},
};