const fs = require('fs');
const path = require('path');

/**
 * Check if the path passed as a string is the filesystem root
 *
 * @param {string} p a string containing a filesystem path to be evaluated
 * @returns {boolean} whether or not the path is the filesystem root
 */
const isRoot = (p) => {
	const parentPath = path.resolve(p, '../');
	return p === parentPath;
}

/**
 * Traverses up the file system's tree until a package.json file is found.
 * Throws an error if no package.json found
 * when reaching the file system's root directory.
 *
 * @param {string} subpath a subpath to append to the directory where package.json is found
 * @param {string} directive the path to start searching for package file from;
 * 														defaults to current directory
 * @returns {string} a string containing the path where package file was found
 * 										(with optional subpath appended)
 */
const rr = (subpath = '', directive='.') => {

	if (isRoot(directive))
	{
		throw new Error('No package.json found between filepath and filesystem root.');
	}

	let absPath = path.resolve(directive);

	let files = fs.readdirSync(absPath);
	if (! files.includes('package.json'))
	{
		let upOne = directive.concat('/..');
		return rr(subpath, upOne);
	}
	let slashes = /^\/|\/$/g;
	if (slashes.test(subpath)) subpath = subpath.replace(slashes, '');
	let pathFromRoot = path.resolve(directive, subpath);
	// console.log('final path:', pathFromRoot);
	return pathFromRoot
}


/**
 * Calls a Node.js require after successfully
 * finding a path via the rr() function.
 *
 * @param {string} subpath a subpath to append to the directory where package.json is found
 * @param {string} directive the path to start searching for package file from;
 * 														defaults to current directory
 * @returns a node require() function call containing the path
 * 					formed from the specified arguments
 */
const rrr = (subpath = '', directive = '.') => {
	const rootPath = rr(subpath, directive);
	return require(rootPath);
}




module.exports = { rr, rrr }
