"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converStringToASCII = void 0;
/*
* Function in charge of convert str provider in a ASCII list
* @param {str} which is going to be converted to ASCII
* @return ASCII list
*/
function converStringToASCII(str) {
    if (str === void 0) { str = ""; }
    return str.split('').map(function (a) { return a.charCodeAt(0); }).join(' ');
}
exports.converStringToASCII = converStringToASCII;
