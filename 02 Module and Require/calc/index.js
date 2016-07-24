function addition(x,y){
    return x+y;
}

function subtraction(x,y){
    return x-y;
}

//exporting requires uti
module.exports = {
    add: addition,
    sub: subtraction
}