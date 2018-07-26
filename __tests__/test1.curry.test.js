import {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take,
} from '../exercise1.curry'

test('Refactor to remove all arguments by partially applying the function.', () =>
  expect(words('Jingle bells Batman smells')).toEqual([
    'Jingle',
    'bells',
    'Batman',
    'smells',
  ]))

test('Use map to make a new words fn that works on an array of strings.', () =>
  expect(
    sentences(['Jingle bells Batman smells', 'Robin laid an egg'])
  ).toEqual([
    ['Jingle', 'bells', 'Batman', 'smells'],
    ['Robin', 'laid', 'an', 'egg'],
  ]))

test('Refactor to remove all arguments by partially applying the functions.', () =>
  expect(filterQs(['quick', 'camels', 'quarry', 'over', 'quails'])).toEqual([
    'quick',
    'quarry',
    'quails',
  ]))

test('Use the helper function _keepHighest to refactor max to not reference any arguments.', () =>
  expect(max([323, 523, 554, 123, 5234])).toBe(5234))

test("Wrap array's slice to be functional and curried.", () =>
  expect(slice(1)(3)(['a', 'b', 'c'])).toEqual(['b', 'c']))

test('Use slice to define a function "take" that returns n elements from the beginning of an array.', () =>
  expect(take(2)(['a', 'b', 'c'])).toEqual(['a', 'b']))
