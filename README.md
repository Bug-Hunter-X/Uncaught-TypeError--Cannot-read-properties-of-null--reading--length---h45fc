# Uncaught TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `Uncaught TypeError: Cannot read properties of null (reading 'length')`.  This error occurs when you try to access the `length` property of a variable that is null or undefined.

## Bug
The `bug.js` file contains a function `foo` that attempts to get the length of a variable `x`. If `x` is null, this will throw the error. 

## Solution
The `bugSolution.js` file provides a solution by explicitly checking if `x` is null before accessing its `length` property. 

This is a crucial concept in defensive programming and preventing unexpected runtime errors in JavaScript. Always validate your inputs and handle potential null or undefined values appropriately.