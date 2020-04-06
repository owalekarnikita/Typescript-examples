// While loop Example
var n = 9;
var fact = 1;
while (n >= 1) {
    fact = fact * n;
    n--;
}
console.log("Factorial of 9 is : " + fact);
//For Loop Example
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
//EXample 2
var myArray = [10, 20, 30, 40, 50,];
console.log("Output of for..in loop ");
for (var index in myArray) {
    console.log(index);
}
console.log("Output of for..of loop ");
for (var _a = 0, myArray_1 = myArray; _a < myArray_1.length; _a++) {
    var val_1 = myArray_1[_a];
    console.log(val_1);
}
//Example 3
var str = "JavaTpoint".split('');
console.log(str);
//example 4
var str2 = "Javascript";
for (var i = 0; i < str2.length; i++) {
    console.log(str2.charAt(i));
}
