export const pluck = key => obj => obj[key]
export const composeFunctions = (f, g) => (...args) => f(g(...args))
export const compose = (...fns) => fns.reduce(composeFunctions)
export const pipe = (...fns) => fns.reduceRight(composeFunctions)
export const identity = x => x
export const map = fn => arr => arr.map(fn)
export const tap = fn => x => { fn(x); return x }
export const log = x => console.log(x)
