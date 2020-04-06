function jseg() {
    var a;
    a = 2;
    document.write("value of a is" + a + "\n");
    var b;
    b = 15;
    document.write("value of b is" + b + "\n");
    var c;
    c = a + b;
    document.write("value of c is" + c + "\n");
    /* while(a<=10)
     {
         document.write("A value is"+a+"\n");
         a++;
     }
     document.writeln("loop executed successfully");
     */
    do {
        document.write("count is" + b + "<br>");
        b++;
    } while (b <= 20);
    document.write("loop Executed");
}
