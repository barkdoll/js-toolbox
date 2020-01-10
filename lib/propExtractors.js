/**
 * Curried function which gets a property by key value from an object.
 * 
 * @param {string} key 
 */
const extractProp = (...keys) => 
    obj =>  keys.length <= 0 ? obj
        // This way the wayfinder.splice(0) below does not mutate 
        // the originally passed arguments.
        : keys.slice(0).reduce(
            (wayfinder, current, index, source) => { 

                if (
                    wayfinder === undefined
                    || wayfinder === null
                    || typeof wayfinder !== 'object' )
                {
                    source.splice(0);
                    return wayfinder;
                }

                return wayfinder[current];
            }, obj);
