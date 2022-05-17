# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jorla/lotide`

**Require it:**

`const _ = require('@jorla/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Compares two values & prints out a message telling us if they match or not.
* `head(array)`: Returns the first element in an array.
* `tail(array)`: Returns all but the first element in an array.
* `eqArrays(arr1, arr2)`: Compares two arrays. Returns true if perfect match and false if not.
* `assertArraysEqual(actual, expected)`: Compares two arrays & prints out a message telling us if they
    match or not.
* `without(sourceArr, itemsRemArr)`: Returns new array of items based on a source array minus the items of a second "items to remove" array.
* `middle(arr)`: Returns the middle of an array. If even amount of elements, returns two most middle elements. If odd amount of elements, returns the middlemost element.
* `countOnly(allItems, itemsToCount)`: Takes a group of items and returns a count of specified items.
* `countLetters(sentence)`: Takes a string and counts the occurences of each letter in the string.
* `letterPositions(sentence)`: Takes a string and displays each index at which each letter occurs.
* `findKeyByValue(object, value)`: Scans an object and returns the first key which contains the given value.
* `eqObjects(object1, object2)`: Compares two object and returns true or false based on a perfect match.
* `assertObjectsEqual(actual, expected)`: Compares two objects & prints out a message telling us if they
    match or not.
* `map(array, callback)`: Takes an array and returns a new one based on a callback function.
* `takeUntil(array, callback)`: Takes an array and returns a slice of it up until, but not including, a callback condition is met/
* `findKey(object, callback)`: Scans an object and returns the first key for which a callback returns a truthy value.
