function jseg()
{
    var a:any;
    a= 2;
    document.write("value of a is"+a+"<br>");
    var b: any;
    b=15;
    document.write("value of b is"+b+"<br>");
    let c: any;
    c= a+b;
    document.write("value of c is"+c+"<br>");

   /* while(a<=10)
    {
        document.write("A value is"+a+"\n");
        a++;
    }
    document.writeln("loop executed successfully");
    */
    do{
        document.write("count is"+b+"<br>");
        b++;
    }while(b<=20);
    document.write("loop Executed");
    
}

