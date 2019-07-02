
// Utility function to check for empty objects

Object.defineProperty(Object.prototype, 'isEmpty', {
	value: function () {
		return (Object.keys(this).length === 0 && this.constructor === Object)
	}
});


// Removes keys with empty values from passed object
Object.prototype.refine = function () {

	let refined = {};

	Object.keys(this).forEach((prop) => {

		if (!['', false, undefined, null].includes(this[prop])) {
			refined[prop] = this[prop];
		}

		return;
	});

	return refined;
}