const { guildID, verifyChannel, verifyEmoji, verifyMessage, verifyRole } = require("../config.json");

module.exports = {
	addRole: function(msg, emoji, user, bot) {
		if (msg.channel.id == verifyChannel && emoji.name == verifyEmoji && msg.id == verifyMessage) {
			bot.addGuildMemberRole(guildID, user.id, verifyRole, "Verification");
		}
	},
};