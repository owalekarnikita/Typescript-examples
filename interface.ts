 let details=(obj1:inf1)=>
 {
     console.log(obj1.fname+" "+obj1.lname);
     console.log("age : "+obj1.age);
 }
interface inf1
{
    fname:string;
    lname:string;
    age:number;
}
details({
    fname: "Nick",
    lname: "Owalekar",
    age: 20
})