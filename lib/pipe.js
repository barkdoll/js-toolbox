/**
 * Source: https://dev.to/leunardo/comment/ce8o
 * 
 * Pass an argument to be applied to a pipe of functions.
 * Get the applied output with the following construct: 
 *      pipe(arg).to(func1, func2)
 * 
 * @param {*} args the value(s) to be used as the pipe's input
 */
const pipe = (args) => {

    const pipeLine = (...fns) => (
        arg => fns.reduce((prev, fn) => fn(prev), arg) );

    return {
        to: (...fns) => pipeLine(...fns)(args)
    }
}

module.exports = pipe;
