function pattern()
{
    let str="";
    let y=10;
    let x=10;
    for(let i=1;i<y;i++)
    {
        for(let j=1;j<x;j++)
        {
            if(j>=i)
            {
                str=str.concat("*");
            }
        }
        str=str.concat("<br>");
    }   
    document.write(str);
    var i: number;
    var j: number;
    for(i=1;i<=9;i++)
    {
        for(j=0;j<i;j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }
}