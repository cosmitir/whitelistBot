const { bot } = require("./config");
const { domainWhitelist } = require("./domainWhitelist");

bot.on("ready", () => {
    console.log("The bot will only work if it has Send Messages and Manage Messages permissions!\nAction | AuthorID | AuthorName | Message");
});

var info = "";
bot.on("messageCreate", (msg) => {
    if (domainWhitelist.some(domain => msg.content.includes(`http://${domain}/`) || msg.content.includes(`https://${domain}/`))) {
        info = `Whitelisted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
    } else if (msg.content.includes("http" || "https")) {
        bot.deleteMessage(msg.channel.id, msg.id, "Non whitelisted link in message!");
        bot.createMessage(msg.channel.id, `**Warning**:\n> <@${msg.author.id}> Stop sending links!\n\nIf you think this was a mistake open a ticket with a screenshot of the link and the reason why it should be whitelisted.`);
        info = `Deleted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
    }
    console.log(info);
});

bot.connect();