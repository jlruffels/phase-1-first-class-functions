function callback(){
    return "hi"
}
function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return callback;
}
returnsANamedFunction;

function returnsAnAnonymousFunction(){
    return function(){}
}
