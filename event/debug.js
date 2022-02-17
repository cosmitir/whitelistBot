module.exports = {
	name: "debug",
	execute(debug) {
		// Log debug
		console.log("\x1b[45m\x1b[37m%s\x1b[0m", `INFO DEBUG: ${debug}`);
	},
};