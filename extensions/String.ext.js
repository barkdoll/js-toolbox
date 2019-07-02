
String.prototype.endsWith = function (suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.cleanFileName = function() {
	return this.trim()
		.replace(/\s+/g, '_')
		.replace(/[<>:"/\\|?]/g, '');

}
