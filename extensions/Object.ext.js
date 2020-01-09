
// Utility function to check for empty objects
Object.isEmpty = function () {
	return (
		Object.keys(this).length === 0 
		&& this.constructor === Object)
};


// Creates a two-dimensional array of every possible combination of key references
Object.keyGlob = function(obj, base = []) {

    const tumbleweed = [];

    for (key in obj) 
    {
        tumbleweed.push([...base, key]);
        
        if ( typeof obj[key] === 'object' && obj[key] !== null ) 
        {
            tumbleweed.push(...Object.keyGlob(obj[key], [...base, key]));
        }
    } 
    
    return tumbleweed;
}



// Removes keys with falsey values from passed object
Object.refine = function(obj) {

	let refined = {};

	Object.keys(obj).forEach((prop) => {

		if (!['', false, undefined, null].includes(obj[prop])) {
			refined[prop] = obj[prop];
		}

		return;
	});

	return refined;
}
