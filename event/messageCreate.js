const { verifyLink } = require("../function/verifyLink.js");

module.exports = {
	name: "messageCreate",
	execute(msg, bot) {
		// Delete messages that contains non whitelisted links
		verifyLink(msg, bot);
	},
};