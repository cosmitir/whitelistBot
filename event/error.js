module.exports = {
	name: "error",
	execute(error) {
		// Log errors
		console.log("\x1b[41m\x1b[37m%s\x1b[0m", `WARN/ERROR: ${error}`);
	},
};