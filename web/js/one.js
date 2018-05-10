function doAdd(){
    if(arguments.length == 1) {
        var result = arguments[0] + 10;
        return result;
    } else if (arguments.length == 2) {
        result = arguments[0] + arguments[1];
        return result;
    } else if (arguments.length == 3) {
        result = arguments[0] + arguments[1] + arguments[2];
        return result;
    }
}
alert(doAdd(10));

alert(doAdd(20, 30));
alert(doAdd(20, 30, 50));

