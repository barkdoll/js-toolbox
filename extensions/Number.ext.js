Number.prototype.round= function(precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(this * multiplier) / multiplier;
}
