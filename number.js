function pattern() {
    var str = "";
    var y = 10;
    var x = 10;
    for (var i_1 = 1; i_1 < y; i_1++) {
        for (var j_1 = 1; j_1 < x; j_1++) {
            if (j_1 >= i_1) {
                str = str.concat("*");
            }
        }
        str = str.concat("<br>");
    }
    document.write(str);
    var i;
    var j;
    for (i = 1; i <= 9; i++) {
        for (j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}
