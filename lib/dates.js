/*
  A date formatter filter for Nunjucks
  @link https://github.com/philhawksworth/jamstack-comments-engine/blob/master/filters/dates.js
  */
module.exports = function(date) {
	var month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	var ordinal = {
		1 : "st",
		2 : "nd",
		3 : "rd",
		21 : "st",
		22 : "nd",
		23 : "rd",
		31 : "st"
	};
	var d = new Date(date);
	return month[d.getMonth()] + " " + d.getDate() + (ordinal[d.getDate()] || "th") + " " +d.getUTCFullYear();
}
