// No i wont tell u what this does, go check Eris documentation
const Eris = require("eris");

const { token } = require("./config.json");
const bot = new Eris(token, { intents: ["allNonPrivileged", "guildMembers", "guildMessages"] });
const fs = require("fs");

// Event handler
const files = fs.readdirSync("./event").filter(file => file.endsWith(".js"));

for (const file of files) {
	const event = require(`./event/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args, bot));
	}
	else {
		bot.on(event.name, (...args) => event.execute(...args, bot));
	}
}

// "Connect me to the world wide web so I can destroy it" - AI's 2069
bot.connect();