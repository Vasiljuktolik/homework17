//Task 1
var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

 function pluck(arr, val){    
    var rez = arr.map(function(item){
        return item[val];
    });    
    return rez;
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']

// Task 2

// var input = [1, 2, 3, 4, 5, 6];

// function isEven(x) { 
//     return x % 2 == 0; 
// }

// function filter(arr, diy){
//     for(var i = 0; i > arr.length; i++){
//       var rez =  diy(arr[i]);   
//       console.log(rez);     
//     }
    
//     return rez;
// } 
// console.log(filter(input, isEven));
// Task 3
// var obj = {
//     width: 300,
//     height: 200,
//     title: "Menu"
//   };

// function count(val){
//     var counter = 0;
//     for (var key in val) {
//     counter++;
//     }    
//     return counter;
// }

// console.log(count(obj));