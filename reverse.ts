function reverse()
{
    var a:any;
    a = "456";
    var rev:number;
    rev=0;
    var dig: number;
    document.write("Print value of a "+a+"<br>");
    while(a > 0)
    {
        dig= a % 10;
        a=(a/10);
        document.write("value of a is "+a);
        rev=rev*10+dig;
    }
    document.writeln("Printing reverse number is "+rev);
}