const { verifyLink } = require("../function/verifyLink.js");

module.exports = {
	name: "messageUpdate",
	execute(msg) {
		// Delete messages that contains non whitelisted links
		verifyLink(msg);
	},
};