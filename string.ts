var str1 =new String("Nick");
var str2:string ="Owalekar";
document.write("My Name is "+str1+str2);

let multiple:string ='Hiii\n'+
                    'we are learning Typescript\n'+
                    'Hows it !!!\n'+
                    'Enjoying!!! \n';
console.log(multiple);
console.log("Length: "+multiple.length);
// taking length without \n means leaving line but including spaces...

type Pet = 'Lion' | 'dog' | 'Rabbit';  
var pet: Pet;  
if(pet = 'Lion'){  
    console.log("Correct");  
};  
if(pet = 'Deer')  
{  
    console.log("compilation error");  
};  

type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log(fruitsName);  
}  
showFruitName('Mango');   //OK - Print 'Mango'  
//Compile Time Error  
showFruitName('Banana');  //it shows error because of banana not exist in string