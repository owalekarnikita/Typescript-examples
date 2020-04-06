var str1 = new String("Nick");
var str2 = "Owalekar";
document.write("My Name is " + str1 + str2);
var multiple = 'Hiii\n' +
    'we are learning Typescript\n' +
    'Hows it !!!\n' +
    'Enjoying!!! \n';
console.log(multiple);
console.log("Length: " + multiple.length);
var pet;
if (pet = 'Lion') {
    console.log("Correct");
}
;
if (pet = 'Deer') {
    console.log("compilation error");
}
;
function showFruitName(fruitsName) {
    console.log(fruitsName);
}
showFruitName('Mango'); //OK - Print 'Mango'  
//Compile Time Error  
showFruitName('Banana');
