// // QUESTION ONE
// let x;
// var a = 5;
// var b = 10;
// var c = function(a,b,c){
//     console.log(x)
//     console.log(a)
//     var f = function(a,b,c){
//         b = a;
//         console.log(b);
//         b = c;
//         var x = 5;
//     }
//     f(a,b,c);
//     console.log(b);
//     var x = 10;
// }
// c(8,9,19);
// console.log(b)
// console.log(x)

// // QUESTION TWO
// var x = 9;
//
// function myFunction() {
//     return x * x;
// }
//
// console.log(myFunction());
// x = 5;
// console.log(myFunction());

// QUESTION THREE
var foo = 1
function bar(){
    if(!foo){
        var foo = 10;
    }
    alert(foo);
}
bar();