const Eris = require("eris");

module.exports = {
	name: "interactionCreate",
	async execute(interaction) {
		if (interaction instanceof Eris.CommandInteraction) {return;}
	},
};