
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
    return {
        to: (...fns) => pipe(...fns)(args)
    }
}