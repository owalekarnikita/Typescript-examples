function star()
{
    var i: number;
    var j: number;
    for(i=1;i<=5;i++)
    {
        for(j=0;j<i;j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }
}