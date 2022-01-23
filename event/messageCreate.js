const { domainWhitelist } = require("../domainWhitelist.js");

module.exports = {
	name: 'messageCreate',
	async execute(msg, bot) {
        var info = "";
        if (domainWhitelist.some(domain => msg.content.includes(`http://${domain}/`) || msg.content.includes(`https://${domain}/`))) {
            info = `Whitelisted || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
        } else if (msg.content.includes("http" || "https")) {
            info = `Warning/Delete || ${msg.author.id} | ${msg.author.username}#${msg.author.discriminator} || ${msg.content}`;
            bot.deleteMessage(msg.channel.id, msg.id, "Non whitelisted link in message!").catch(err => {console.log(`${err} |> Not deleted user message, check error!`)});
            await bot.createMessage(msg.channel.id, {
                embed: {
                    title: "Warning",
                    description: `<@${msg.author.id}> Stop sending links!`,
                        color: 0x8532D9,
                        fields: [{
                                name: "Support",
                                value: "If you think this was a mistake open a ticket with a screenshot of the link and the reason why it should be whitelisted.",
                        }]
                }
            })
            .catch(err => {console.log(err)})
            .then(async (sentMessage) => {
                await delay(6900); // Delete warn delay (default: 6900)
                sentMessage.delete();
            });
        }
        console.log(info);
	},
};

// Fuck it, ill delay it my self :joy:
function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
};