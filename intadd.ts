let add=(a:addition)=>
{
    console.log("addition : "+(a.c+a.d));
}
interface addition{
c: number;
d: number;
e: number;
}
add({
    c: 20,
    d: 25,
    e: 30
});