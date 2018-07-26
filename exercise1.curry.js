import { split, filter, reduce, test as match } from 'ramda'

// Exercise 1
// TODO: Refactor to remove all arguments by partially applying the function.
export const words = function(str) {
  return split(' ', str)
}

// Exercise 1a
// TODO: Use map to make a new words fn that works on an array of strings.
export const sentences = undefined

// Exercise 2
// TODO: Refactor to remove all arguments by partially applying the functions.
export const filterQs = function(xs) {
  return filter(function(x) {
    return match(/q/i, x)
  }, xs)
}

// Exercise 3
// TODO: Use the helper function _keepHighest to refactor max to not reference any arguments.

// LEAVE BE:
const _keepHighest = (x, y) => (x >= y ? x : y)

// REFACTOR THIS ONE:
export const max = function(xs) {
  return reduce(
    function(acc, x) {
      return _keepHighest(acc, x)
    },
    -Infinity,
    xs
  )
}

// Bonus 1
// TODO: Wrap array's slice to be functional and curried.
// [1, 2, 3].slice(0, 2)
export const slice = undefined

// Bonus 2
// TODO: Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
export const take = undefined
