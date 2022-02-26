module.exports = {
	createCommands: function(bot) {
		bot.createCommand({ name: "suggest", description: "Used to create a suggestion" }, 1)
			.then(() => {console.log("Created all commands");})
			.catch(console.error);
	},
};