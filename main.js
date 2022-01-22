// No i wont tell u what this does, go check Eris documentation
const Eris = require("eris");
const config = require("./config.json");
const bot = new Eris(config.token);
const { domainWhitelist } = require("./domainWhitelist.js");

bot.on("ready", () => {
    bot.editStatus(config.status, {name: config.activitiesName, type: config.activitiesType});
    console.log("The bot will only work if it has Send Messages and Manage Messages permissions!\nAction | AuthorID | AuthorName | Message");
});

// Lets just create a variable here cuz im too lazy to do it the right way || Oh this variable is just to make log output easier
var info = "";

// The bot will get an API signal that a message was arrived, compare whitelist, delete any message containing web protocols, warn and delete warn after 2500 seconds || BOOM log everything
bot.on("messageCreate", async msg => {
    if (domainWhitelist.some(domain => msg.content.includes(`http://${domain}/`) || msg.content.includes(`https://${domain}/`))) {
        info = `Whitelisted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
    } else if (msg.content.includes("http" || "https")) {
        info = `Deleted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
        bot.deleteMessage(msg.channel.id, msg.id, "Non whitelisted link in message!");
        return bot.createMessage(msg.channel.id, {
            embed: {
                title: "Warning",
                description: `<@${msg.author.id}> Stop sending links!`,
                    color: 0x8532D9,
                    fields: [{
                            name: "Support",
                            value: "If you think this was a mistake open a ticket with a screenshot of the link and the reason why it should be whitelisted.",
                    },]
            }
        }).then(async sentMessage => {
            await delay(6900); // Delete warn delay (default: 6900)
            return sentMessage.delete();
        });
    }
    console.log(info);
});

// Fuck it, ill delay it my self :joy:
function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

// "Connect me to the world wide web so I can destroy it" - AI's 2069
bot.connect();