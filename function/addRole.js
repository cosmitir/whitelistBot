module.exports = {
	addRole: function(msg, emoji, user, bot) {
		if (msg.channel.id == "826486649675317269" && emoji.name == "Atlantic" && msg.id == "943705425012981771") {
			bot.addGuildMemberRole("719912316451160115", user.id, "826486561309851659", "Verification");
		}
	},
};