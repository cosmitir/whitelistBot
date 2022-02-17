module.exports = {
	delay: function(ms) {
		return new Promise(r => setTimeout(r, ms));
	},
};