"use strict";
// Q no:06 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
let userVal1 = "\t\n   Pakistan\t\n";
console.log("Name with whitespaces", userVal1);
let userVal2 = userVal1.trim();
console.log("Stripped Value :", userVal2);
