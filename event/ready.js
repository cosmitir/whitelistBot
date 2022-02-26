const { status, activitiesName, activitiesType, activitiesUrl } = require("../config.json");
const { createCommands } = require("../function/createCommands.js");

module.exports = {
	name: "ready",
	once: true,
	execute(bot) {
		// Create slash command
		createCommands(bot);
		// Edit bot status/activity and sends a message in console
		bot.editStatus(status, { name: activitiesName, type: activitiesType, url: activitiesUrl });
		console.log("Action || AuthorID | AuthorName || Message");
	},
};