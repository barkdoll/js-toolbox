/**
 * Create a random URI segment for dynamic file/route generation.
 * @param len the length of the URI segment
 * @return the random URI as a string
 */
module.exports = (len) => {

	let uriChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_~';
	let hash = '';
	while (len > 0) {
		let i = Math.floor(Math.random() * uriChars.length);
		hash += uriChars[i];
		let rex = new RegExp(uriChars[i], 'g');
		uriChars = uriChars.replace(rex, '');
		len--;
	}
	return hash;

}
