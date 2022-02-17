const { addRole } = require("../function/addRole.js");

module.exports = {
	name: "messageReactionAdd",
	execute(msg, emoji, user, bot) {
		addRole(msg, emoji, user, bot);
	},
};
