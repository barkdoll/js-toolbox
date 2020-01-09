/**
 * Curried function which gets a property by key value from an object.
 * 
 * @param {string} key 
 */
const getProp = key => obj => obj[key];

/**
 * Curried function that attempts to retrieve a nested object value
 * using an arbitrary number of keys for referencing depth.
 * 
 * Example:
 *  const nested = {
 *      need: {
 *          lower: {
 *              here: 'you found me!'
 *          }
 *      }
 *  }
 * 
 *  deepGetProp('need', 'lower', 'here')(nested); // => 'you found me!'
 * 
 * @param  {...string} keys 
 */
const deepGetProp = (...keys) => obj => (
    keys.slice(0).reduce(
        (wayfinder, current, index, source) => {
            if (wayfinder === undefined)
            {
                source.splice(source.length - index + 1);
                return wayfinder;
            }

            return getProp(current)(wayfinder)
        }, obj));
