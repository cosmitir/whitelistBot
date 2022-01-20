// No i wont tell u what this does, go check Eris documentation
const Eris = require("eris");
const config = require("./config.json");
const bot = new Eris(config.token);
const { domainWhitelist } = require("./domainWhitelist");

bot.on("ready", () => {
    console.log("The bot will only work if it has Send Messages and Manage Messages permissions!\nAction | AuthorID | AuthorName | Message");
});

// Lets just create a variable here cuz im too lazy to do it the right way || Oh this variable is just to make log output easier
var info = "";

// The bot will get an API signal that a message was arrived, compare whitelist, delete any message containing web protocols || BOOM log everything
bot.on("messageCreate", (msg) => {
    if (domainWhitelist.some(domain => msg.content.includes(`http://${domain}/`) || msg.content.includes(`https://${domain}/`))) {
        info = `Whitelisted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
    } else if (msg.content.includes("http" || "https")) {
        bot.deleteMessage(msg.channel.id, msg.id, "Non whitelisted link in message!");
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Warning",
                description: `<@${msg.author.id}> Stop sending links!`,
                    color: 0x8532D9,
                    fields: [
                        {
                            name: "Support",
                            value: "If you think this was a mistake open a ticket with a screenshot of the link and the reason why it should be whitelisted.",
                    },
                ]
            }
        });
        info = `Deleted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
    }
    console.log(info);
});

// "Connect me to the world wide web so I can destroy it" - AI's 2069
bot.connect();