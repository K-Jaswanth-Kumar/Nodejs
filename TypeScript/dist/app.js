"use strict";
console.log('Hello World from typescript');
// basic typing 
let isDone = true;
let num = 100;
let name = "J";
let list = [1, 2, 3];
let producst = ['Product 1', 'Product 2'];
let randomValue = 4;
randomValue = "x";
randomValue = true;
var Color;
(function (Color) {
    Color[Color["R"] = 0] = "R";
    Color[Color["G"] = 1] = "G";
    Color[Color["B"] = 2] = "B";
})(Color || (Color = {}));
let d = Color.R;
