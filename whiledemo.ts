// While loop Example
let n = 9;
let fact=1;
while(n>=1)
{
    fact=fact*n;
    n--;
}
console.log("Factorial of 9 is : "+fact);

//For Loop Example

let arr = [1, 2, 3, 4, 5];  
  
for (var val of arr) 
{  
  console.log(val);  
}  
//EXample 2
let myArray = [10, 20, 30, 40, 50,];  
console.log("Output of for..in loop ");  
for (let index in myArray) {  
   console.log(index);  
}  
console.log("Output of for..of loop ");  
for (let val of myArray) {  
   console.log(val);  
} 

//Example 3
let str:any = "JavaTpoint".split('');  
  console.log(str);
  
  
  //example 4
  let str2 = "Javascript";
for (var i = 0; i < str2.length; i++) {
    console.log(str2.charAt(i));
}